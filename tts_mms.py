import os
import sys
import urllib.request
import argparse
import ssl
import wave
import tarfile
import numpy as np
import sherpa_onnx

# Bypass SSL certificate validation to prevent download errors on Windows
try:
    ssl._create_default_https_context = ssl._create_unverified_context
except AttributeError:
    pass

# Paths configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "models", "piper-ka")
MODEL_PATH = os.path.join(MODEL_DIR, "ka_GE-natia-medium.onnx")
TOKENS_PATH = os.path.join(MODEL_DIR, "tokens.txt")
ESPEAK_DIR = os.path.join(BASE_DIR, "models", "espeak-ng-data")

def download_file(url, destination):
    print(f"Downloading {url} to {destination}...", flush=True)
    os.makedirs(os.path.dirname(destination), exist_ok=True)
    
    def reporthook(blocknum, blocksize, totalsize):
        readsofar = blocknum * blocksize
        if totalsize > 0:
            percent = readsofar * 1e2 / totalsize
            s = "\r%5.1f%% %*d / %d" % (
                percent, len(str(totalsize)), readsofar, totalsize)
            sys.stdout.write(s)
            sys.stdout.flush()
        else:
            sys.stdout.write("read %d\n" % (readsofar,))

    urllib.request.urlretrieve(url, destination, reporthook)
    sys.stdout.write("\n")
    print(f"Download complete.", flush=True)

def main():
    parser = argparse.ArgumentParser(description="Sherpa-ONNX Georgian TTS Piper engine script")
    parser.add_argument("--text", required=True, help="Text to synthesize")
    parser.add_argument("--output", required=True, help="Path to save the output WAV file")
    parser.add_argument("--speed", type=float, default=1.0, help="Speaking speed")
    args = parser.parse_args()

    # 1. Download Piper model and tokens if missing
    if not os.path.exists(MODEL_PATH):
        print("Piper model file not found. Starting download (approx. 15MB)...", flush=True)
        download_file(
            "https://huggingface.co/csukuangfj/vits-piper-ka_GE-natia-medium/resolve/main/ka_GE-natia-medium.onnx",
            MODEL_PATH
        )

    if not os.path.exists(TOKENS_PATH):
        print("Tokens not found. Starting download...", flush=True)
        download_file(
            "https://huggingface.co/csukuangfj/vits-piper-ka_GE-natia-medium/resolve/main/tokens.txt",
            TOKENS_PATH
        )

    # 2. Download and extract espeak-ng-data if missing
    if not os.path.exists(ESPEAK_DIR):
        models_root = os.path.join(BASE_DIR, "models")
        temp_archive = os.path.join(models_root, "espeak-ng-data.tar.bz2")
        print("espeak-ng-data not found. Starting download (approx. 2.6MB)...", flush=True)
        download_file(
            "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/espeak-ng-data.tar.bz2",
            temp_archive
        )
        print("Extracting espeak-ng-data...", flush=True)
        with tarfile.open(temp_archive, "r:bz2") as tar:
            tar.extractall(path=models_root)
        print("Extraction complete.", flush=True)
        try:
            os.remove(temp_archive)
        except Exception as e:
            print(f"Failed to remove temp archive: {e}", flush=True)

    # 3. Configure TTS
    print("Configuring OfflineTts engine...", flush=True)
    vits_config = sherpa_onnx.OfflineTtsVitsModelConfig(
        model=MODEL_PATH,
        tokens=TOKENS_PATH,
        data_dir=ESPEAK_DIR,
        noise_scale=0.667,
        noise_scale_w=0.8,
        length_scale=1.0 / args.speed,
    )
    
    model_config = sherpa_onnx.OfflineTtsModelConfig(
        vits=vits_config,
        num_threads=2,
        debug=False,
        provider="cpu",
    )
    
    tts_config = sherpa_onnx.OfflineTtsConfig(
        model=model_config,
        max_num_sentences=1,
    )

    # 4. Synthesize speech
    print("Initializing OfflineTts engine...", flush=True)
    tts = sherpa_onnx.OfflineTts(tts_config)

    print(f"Generating speech for text: {args.text}", flush=True)
    audio = tts.generate(args.text)

    # 5. Save to WAV
    print(f"Saving generated audio to {args.output}...", flush=True)
    samples = audio.samples
    
    # Convert float32 [-1.0, 1.0] to int16 [-32768, 32767]
    pcm_samples = np.clip(np.array(samples) * 32767, -32768, 32767).astype(np.int16)
    
    with wave.open(args.output, "wb") as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2) # 16-bit PCM
        wav_file.setframerate(audio.sample_rate)
        wav_file.writeframes(pcm_samples.tobytes())

    print("TTS generation complete.", flush=True)

if __name__ == "__main__":
    main()
