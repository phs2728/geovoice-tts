const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON body parser
app.use(cors());
app.use(express.json());

// Serve static frontend files from current directory
app.use(express.static(__dirname));

// Endpoint to check which APIs are configured
app.get('/api/config', (req, res) => {
    res.json({
        elevenlabs: !!process.env.ELEVENLABS_API_KEY,
        google: !!process.env.GOOGLE_API_KEY,
        azure: !!process.env.AZURE_API_KEY,
        gemini: !!(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY)
    });
});

// Proxy route for ElevenLabs TTS
app.post('/api/tts/elevenlabs', async (req, res) => {
    try {
        const { text, voiceId } = req.body;
        const apiKey = process.env.ELEVENLABS_API_KEY;

        if (!apiKey) {
            return res.status(400).json({ error: '서버 .env 파일에 ElevenLabs API Key가 설정되지 않았습니다.' });
        }

        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'xi-api-key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                model_id: 'eleven_multilingual_v2',
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75
                }
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            const errMsg = err.detail?.status || err.detail?.message || `ElevenLabs HTTP ${response.status}`;
            return res.status(response.status).json({ error: errMsg });
        }

        const arrayBuffer = await response.arrayBuffer();
        res.set('Content-Type', 'audio/mpeg');
        res.send(Buffer.from(arrayBuffer));
    } catch (err) {
        console.error("ElevenLabs proxy error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Proxy route for Google Cloud TTS
app.post('/api/tts/google-cloud', async (req, res) => {
    try {
        const { text, voiceId, speed, pitch } = req.body;
        const apiKey = process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            return res.status(400).json({ error: '서버 .env 파일에 Google API Key가 설정되지 않았습니다.' });
        }

        const semitonePitch = (pitch - 1.0) * 12.0;

        const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: { text: text },
                voice: {
                    languageCode: 'ka-GE',
                    name: voiceId
                },
                audioConfig: {
                    audioEncoding: 'MP3',
                    speakingRate: speed,
                    pitch: semitonePitch
                }
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            const errMsg = err.error?.message || `Google Cloud HTTP ${response.status}`;
            return res.status(response.status).json({ error: errMsg });
        }

        const json = await response.json();
        const buffer = Buffer.from(json.audioContent, 'base64');
        
        res.set('Content-Type', 'audio/mpeg');
        res.send(buffer);
    } catch (err) {
        console.error("Google Cloud proxy error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Proxy route for Google Gemini TTS
app.post('/api/tts/gemini', async (req, res) => {
    try {
        const { text, voiceId } = req.body;
        const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            return res.status(400).json({ error: '서버 .env 파일에 Gemini API Key가 설정되지 않았습니다.' });
        }

        const model = "gemini-3.1-flash-tts-preview";
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const requestBody = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `Read the following transcript based on the audio profile and director's note.

# Audio Profile
A helpful and professional personal assistant.

# Director's note
Style: Empathetic. Pace: Natural. Accent: Georgian.

## Transcript:
${text}`
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 1.0,
                responseModalities: ["audio"],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: {
                            voiceName: voiceId
                        }
                    }
                }
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errJson = await response.json().catch(() => ({}));
            const errMsg = errJson.error?.message || `Gemini HTTP ${response.status}`;
            return res.status(response.status).json({ error: errMsg });
        }

        const json = await response.json();
        const candidate = json.candidates?.[0];
        const part = candidate?.content?.parts?.[0];

        if (!part || !part.inlineData) {
            return res.status(500).json({ error: "Gemini API 응답에서 오디오 데이터를 찾을 수 없습니다." });
        }

        const mimeType = part.inlineData.mimeType;
        const base64Data = part.inlineData.data;
        const rawAudio = Buffer.from(base64Data, 'base64');
        
        const wavBuffer = convertToWav(rawAudio, mimeType);

        res.set('Content-Type', 'audio/wav');
        res.send(wavBuffer);
    } catch (err) {
        console.error("Gemini proxy error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Helper function to parse mimeType and build WAV container
function convertToWav(audioData, mimeType) {
    let bitsPerSample = 16;
    let rate = 24000;

    const parts = mimeType.split(";");
    for (let part of parts) {
        part = part.trim();
        if (part.toLowerCase().startsWith("rate=")) {
            const val = parseInt(part.split("=")[1], 10);
            if (!isNaN(val)) rate = val;
        } else if (part.startsWith("audio/L")) {
            const val = parseInt(part.split("L")[1], 10);
            if (!isNaN(val)) bitsPerSample = val;
        }
    }

    const numChannels = 1;
    const dataSize = audioData.length;
    const bytesPerSample = bitsPerSample / 8;
    const blockAlign = numChannels * bytesPerSample;
    const byteRate = rate * blockAlign;
    const chunkSize = 36 + dataSize;

    const header = Buffer.alloc(44);
    header.write("RIFF", 0);
    header.writeUInt32LE(chunkSize, 4);
    header.write("WAVE", 8);
    header.write("fmt ", 12);
    header.writeUInt32LE(16, 16);
    header.writeUInt16LE(1, 20);
    header.writeUInt16LE(numChannels, 22);
    header.writeUInt32LE(rate, 24);
    header.writeUInt32LE(byteRate, 28);
    header.writeUInt16LE(blockAlign, 32);
    header.writeUInt16LE(bitsPerSample, 34);
    header.write("data", 36);
    header.writeUInt32LE(dataSize, 40);

    return Buffer.concat([header, audioData]);
}

// Proxy route for Microsoft Azure TTS
app.post('/api/tts/azure', async (req, res) => {
    try {
        const { text, voiceId, speed, pitch } = req.body;
        const apiKey = process.env.AZURE_API_KEY;
        const region = process.env.AZURE_REGION || 'eastus';

        if (!apiKey) {
            return res.status(400).json({ error: '서버 .env 파일에 Azure API Key가 설정되지 않았습니다.' });
        }

        const pctRate = `${Math.round((speed - 1.0) * 100)}%`;
        const pctPitch = `${Math.round((pitch - 1.0) * 100)}%`;
        
        const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='ka-GE'>
            <voice name='${voiceId}'>
                <prosody rate='${pctRate}' pitch='${pctPitch}'>
                    ${text}
                </prosody>
            </voice>
        </speak>`;

        const response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey,
                'Content-Type': 'application/ssml+xml',
                'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
                'User-Agent': 'GeoVoiceTTS'
            },
            body: ssml
        });

        if (!response.ok) {
            const errMsg = await response.text().catch(() => '');
            return res.status(response.status).json({ error: errMsg || `Azure HTTP ${response.status}` });
        }

        const arrayBuffer = await response.arrayBuffer();
        res.set('Content-Type', 'audio/mpeg');
        res.send(Buffer.from(arrayBuffer));
    } catch (err) {
        console.error("Azure proxy error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Export the app for serverless platforms like Vercel
module.exports = app;

// Start the server if run directly (local development)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`==================================================`);
        console.log(`  GeoVoice TTS Server is running on port ${PORT}`);
        console.log(`  Open http://localhost:${PORT} in your browser`);
        console.log(`==================================================`);
    });
}
