// --- Constant Data (Phrases & Alphabet) ---

const PHRASES = {
    greetings: [
        { geo: "გამარჯობა", trans: "gamarjoba", kor: "안녕하세요" },
        { geo: "დილა მშვიდობისა", trans: "dila mshvidobisa", kor: "좋은 아침입니다" },
        { geo: "საღამო მშვიდობისა", trans: "saghamo mshvidobisa", kor: "좋은 저녁입니다" },
        { geo: "როგორ ხარ?", trans: "rogor khar?", kor: "어떻게 지내세요? (잘 지내?)" },
        { geo: "კარგად, გმადლობთ", trans: "kargad, gmadlobt", kor: "잘 지냅니다, 감사합니다" },
        { geo: "ნახვამდის", trans: "nakhvamdis", kor: "안녕히 계세요 / 잘 가요" },
        { geo: "დიდი მადლობა", trans: "didi madloba", kor: "대단히 감사합니다" },
        { geo: "სასიამოვნოა თქვენი გაცნობა", trans: "sashiamovnoa tkveni gatsnoba", kor: "만나서 반갑습니다" },
        { geo: "რა გქვია?", trans: "ra gqvia?", kor: "이름이 무엇인가요?" }
    ],
    survival: [
        { geo: "კი", trans: "ki", kor: "네" },
        { geo: "არა", trans: "ara", kor: "아니오" },
        { geo: "გთხოვთ", trans: "gtxovt", kor: "부탁합니다 (Please)" },
        { geo: "ბოდიში", trans: "bodishi", kor: "미안합니다 / 실례합니다" },
        { geo: "ვერ გავიგე", trans: "ver gavige", kor: "이해하지 못했습니다" },
        { geo: "სად არის ტუალეტი?", trans: "sad aris tualeti?", kor: "화장실이 어디에 있나요?" },
        { geo: "შეგიძლიათ დამეხმაროთ?", trans: "shegizliat damexmarot?", kor: "도와주실 수 있나요?" },
        { geo: "ინგლისურად ლაპარაკობთ?", trans: "inglisurad laparakobt?", kor: "영어 하실 줄 아세요?" },
        { geo: "ექიმი მჭირდება", trans: "eqimi mchirdeba", kor: "의사가 필요합니다" }
    ],
    numbers: [
        { geo: "ერთი", trans: "erti", kor: "1 (하나)" },
        { geo: "ორი", trans: "ori", kor: "2 (둘)" },
        { geo: "სამი", trans: "sami", kor: "3 (셋)" },
        { geo: "ოთხი", trans: "otkhi", kor: "4 (넷)" },
        { geo: "ხუთი", trans: "khuti", kor: "5 (다섯)" },
        { geo: "ათი", trans: "ati", kor: "10 (열)" },
        { geo: "ოცი", trans: "otsi", kor: "20 (스물)" },
        { geo: "ორმოცი", trans: "ormotsi", kor: "40 (마흔)" },
        { geo: "ასი", trans: "asi", kor: "100 (백)" }
    ],
    dining: [
        { geo: "რა ღირს?", trans: "ra ghirs?", kor: "얼마인가요?" },
        { geo: "წყალი მინდა", trans: "tskali minda", kor: "물 원합니다" },
        { geo: "ღვინო", trans: "ghvino", kor: "와인" },
        { geo: "ლუდი", trans: "ludi", kor: "맥주" },
        { geo: "ხაჭაპური", trans: "khachapuri", kor: "하차푸리 (치즈 빵)" },
        { geo: "ხინკალი", trans: "khinkali", kor: "힌칼리 (조지아식 만두)" },
        { geo: "გემრიელია", trans: "gemrielia", kor: "맛있습니다!" },
        { geo: "ანგარიში, გთხოვთ", trans: "angarishi, gtxovt", kor: "계산서 주세요" }
    ]
};

const ALPHABET = [
    { char: "ა", name: "an", sound: "a (아)" },
    { char: "ბ", name: "ban", sound: "b (바)" },
    { char: "გ", name: "gan", sound: "g (가)" },
    { char: "დ", name: "don", sound: "d (다)" },
    { char: "ე", name: "en", sound: "e (에)" },
    { char: "ვ", name: "vin", sound: "v (바/와)" },
    { char: "ზ", name: "zen", sound: "z (자)" },
    { char: "თ", name: "tan", sound: "t (타 - 약한 숨)" },
    { char: "ი", name: "ini", sound: "i (이)" },
    { char: "კ", name: "kan", sound: "k' (까 - 센 소리)" },
    { char: "ლ", name: "las", sound: "l (라)" },
    { char: "მ", name: "man", sound: "m (마)" },
    { char: "ნ", name: "nar", sound: "n (나)" },
    { char: "ო", name: "on", sound: "o (오)" },
    { char: "პ", name: "par", sound: "p' (빠 - 센 소리)" },
    { char: "ჟ", name: "zhan", sound: "zh (쟈 - 불어 j)" },
    { char: "რ", name: "rae", sound: "r (라 - 굴리는 소리)" },
    { char: "ს", name: "san", sound: "s (사)" },
    { char: "ტ", name: "tar", sound: "t' (따 - 센 소리)" },
    { char: "უ", name: "uni", sound: "u (우)" },
    { char: "ფ", name: "par", sound: "p (파 - 약한 숨)" },
    { char: "ქ", name: "kan", sound: "k (카 - 약한 숨)" },
    { char: "ღ", name: "ghan", sound: "gh (가/라 - 불어 r)" },
    { char: "ყ", name: "qar", sound: "q' (까 - 목구멍 안 소리)" },
    { char: "შ", name: "shin", sound: "sh (샤)" },
    { char: "ჩ", name: "chin", sound: "ch (차 - 약한 숨)" },
    { char: "ც", name: "tsan", sound: "ts (차)" },
    { char: "ძ", name: "dzil", sound: "dz (자)" },
    { char: "წ", name: "ts'il", sound: "ts' (짜 - 센 소리)" },
    { char: "ჭ", name: "ch'ar", sound: "ch' (쨔 - 센 소리)" },
    { char: "ხ", name: "khan", sound: "kh (하 - 독일어 ch)" },
    { char: "ჯ", name: "jan", sound: "j (자)" },
    { char: "ჰ", name: "hae", sound: "h (하)" }
];

// --- Web Speech Synthesis Support Check ---
let systemVoices = [];
function loadSystemVoices() {
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        systemVoices = speechSynthesis.getVoices();
        // Fallback for some browsers that fire it on load
        if (systemVoices.length === 0) {
            systemVoices = speechSynthesis.getVoices();
        }
    }
}
loadSystemVoices();
if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.onvoiceschanged = () => {
        loadSystemVoices();
        if (document.getElementById('select-engine').value === 'system') {
            updateVoiceList();
        }
    };
}

// --- App State Config ---
const DEFAULT_ELEVENLABS_KEY = "fab11b1aa1b842c8ac1e9ec36e72daa8";

const state = {
    activeTab: 'tab-phrasebook',
    activeCategory: 'greetings',
    keyboardOpen: false,
    currentEngine: 'free-google',
    playbackState: 'idle', // 'idle', 'generating', 'playing'
    audioBlob: null,
    audioUrl: null,
    history: [],
    // API Keys (load from localStorage, fallback ElevenLabs to default)
    apiKeys: {
        elevenlabs: localStorage.getItem('key_elevenlabs') || DEFAULT_ELEVENLABS_KEY,
        elevenlabsVoice: localStorage.getItem('key_elevenlabs_voice') || '',
        google: localStorage.getItem('key_google') || '',
        azure: localStorage.getItem('key_azure') || '',
        azureRegion: localStorage.getItem('key_azure_region') || 'eastus'
    },
    // Google Translate Sequential Queue State
    googleQueue: [],
    googleQueueIndex: 0,
    // Server Proxy configuration
    isServerActive: false,
    serverConfig: { elevenlabs: false, google: false, azure: false }
};

function getServerUrl() {
    if (window.location.protocol === 'file:') {
        return 'http://localhost:3000';
    }
    return window.location.origin;
}

// --- Web Audio Visualizer Setup ---
let audioContext = null;
let analyser = null;
let source = null;
let animationFrameId = null;

function initAudioVisualizer(audioElement) {
    if (audioContext) return;
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 64; // Small fft for 20 visualizer bars
        
        source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
    } catch (e) {
        console.warn("Web Audio API visualizer failed to initialize:", e);
    }
}

function updateVisualizer() {
    if (!analyser || state.playbackState !== 'playing') {
        return;
    }

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    const visualizer = document.getElementById('wave-visualizer');
    const bars = visualizer.querySelectorAll('span');
    
    let isSilent = true;
    
    // Distribute frequency data to 20 bars
    for (let i = 0; i < bars.length; i++) {
        const dataIdx = Math.floor((i / bars.length) * (bufferLength * 0.7)); 
        let val = dataArray[dataIdx] || 0;
        
        if (val > 0) {
            isSilent = false;
        }
        
        // Scale values for styling
        let barHeight = (val / 255) * 45; // Max 45px
        barHeight = Math.max(6, barHeight); // Min 6px
        bars[i].style.height = `${barHeight}px`;
    }

    // CORS or other audio block detection
    if (isSilent) {
        visualizer.classList.add('dummy-active');
    } else {
        visualizer.classList.remove('dummy-active');
    }

    animationFrameId = requestAnimationFrame(updateVisualizer);
}

function startVisualizer() {
    const visualizer = document.getElementById('wave-visualizer');
    visualizer.classList.add('active');
    
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }

    if (analyser) {
        updateVisualizer();
    } else {
        // Web Audio failed or blocked (e.g. CORS) -> Fallback to CSS dummy animation
        visualizer.classList.add('dummy-active');
    }
}

function stopVisualizer() {
    const visualizer = document.getElementById('wave-visualizer');
    visualizer.classList.remove('active');
    visualizer.classList.remove('dummy-active');
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    // Reset bar heights
    const bars = visualizer.querySelectorAll('span');
    bars.forEach(bar => bar.style.height = '6px');
}

// --- DOM Elements ---
const selectEngine = document.getElementById('select-engine');
const selectVoice = document.getElementById('select-voice');
const ttsInput = document.getElementById('tts-input');
const charCount = document.getElementById('char-count');
const btnPlay = document.getElementById('btn-play');
const btnStop = document.getElementById('btn-stop');
const btnDownload = document.getElementById('btn-download');
const audioPlayer = document.getElementById('audio-player');
const audioStatus = document.getElementById('audio-status');

// Controls
const rangeSpeed = document.getElementById('range-speed');
const valSpeed = document.getElementById('val-speed');
const rangePitch = document.getElementById('range-pitch');
const valPitch = document.getElementById('val-pitch');

// Modals
const btnSettings = document.getElementById('btn-settings');
const modalSettings = document.getElementById('modal-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnCancelSettings = document.getElementById('btn-cancel-settings');
const btnSaveSettings = document.getElementById('btn-save-settings');
const inputElevenLabsKey = document.getElementById('input-elevenlabs-key');
const inputElevenlabsVoice = document.getElementById('input-elevenlabs-voice');
const inputGoogleKey = document.getElementById('input-google-key');
const inputAzureKey = document.getElementById('input-azure-key');
const inputAzureRegion = document.getElementById('input-azure-region');

// UI Toggles
const btnToggleKeyboard = document.getElementById('btn-toggle-keyboard');
const geoKeyboard = document.getElementById('geo-keyboard');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const categoryButtons = document.querySelectorAll('.cat-btn');

// --- Initialization & Engine Definitions ---

const ENGINES = {
    'free-google': {
        name: 'Google Translate TTS',
        badge: '무료 기본',
        badgeClass: 'green',
        voices: [
            { id: 'ka-female', name: '조지아어 원어민 여성 (기본)' }
        ]
    },
    'elevenlabs': {
        name: 'ElevenLabs AI Neural',
        badge: 'ElevenLabs 연결됨',
        badgeClass: 'blue',
        voices: [
            { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel (여성 - 추천)' },
            { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Bella (여성 - 밝음)' },
            { id: 'ErXwobaYiN019PkySvjV', name: 'Antoni (남성 - 중후함)' },
            { id: 'AZnzlk1XydvFTIaUrjgH', name: 'Dom (남성 - 차분함)' },
            { id: 'pNInz6obpgq5paNa6fD7', name: 'Adam (남성 - 나레이션)' }
        ]
    },
    'google-cloud': {
        name: 'Google Cloud TTS',
        badge: 'Google Cloud 연결됨',
        badgeClass: 'blue',
        voices: [
            { id: 'ka-GE-Standard-A', name: 'ka-GE-Standard-A (여성)' }
        ]
    },
    'azure': {
        name: 'Microsoft Azure Neural',
        badge: 'Azure 연결됨',
        badgeClass: 'blue',
        voices: [
            { id: 'ka-GE-EkaNeural', name: 'Eka (여성)' },
            { id: 'ka-GE-GiorgiNeural', name: 'Giorgi (남성)' }
        ]
    },
    'system': {
        name: 'System Speech API',
        badge: '로컬 시스템 엔진',
        badgeClass: 'yellow',
        voices: [] // Populated dynamically
    }
};

function updateEngineStatusBadge() {
    const badge = document.getElementById('engine-status');
    const dot = badge.querySelector('.status-dot');
    const text = badge.querySelector('.status-text');

    const config = ENGINES[state.currentEngine];
    dot.className = `status-dot ${config.badgeClass}`;
    
    if (state.isServerActive) {
        // Server active mode status (.env configuration)
        const isConfigured = state.serverConfig[state.currentEngine === 'google-cloud' ? 'google' : state.currentEngine];
        if (state.currentEngine === 'free-google') {
            text.textContent = '무료 기본 (서버 모드)';
        } else if (state.currentEngine === 'system') {
            text.textContent = '로컬 시스템 엔진';
        } else {
            text.textContent = isConfigured ? `${config.name.split(' ')[0]} (.env 활성)` : `${config.name.split(' ')[0]} (.env 키 없음)`;
            if (!isConfigured) dot.className = `status-dot yellow`;
        }
    } else {
        // Direct browser mode status (local settings)
        if (state.currentEngine === 'elevenlabs') {
            text.textContent = state.apiKeys.elevenlabs === DEFAULT_ELEVENLABS_KEY ? 'ElevenLabs (기본 키)' : 'ElevenLabs (사용자 키)';
        } else if (state.currentEngine === 'google-cloud') {
            text.textContent = state.apiKeys.google ? 'Google Cloud 활성' : '구글 API 키 필요';
            if (!state.apiKeys.google) dot.className = `status-dot yellow`;
        } else if (state.currentEngine === 'azure') {
            text.textContent = state.apiKeys.azure ? 'Azure 활성' : 'Azure API 키 필요';
            if (!state.apiKeys.azure) dot.className = `status-dot yellow`;
        } else {
            text.textContent = config.badge;
        }
    }
}

function updateVoiceList() {
    selectVoice.innerHTML = '';
    const engine = state.currentEngine;
    
    if (engine === 'system') {
        // Find system voices that are Georgian (ka) or are RHVoice Natia fallback
        const kaVoices = systemVoices.filter(v => {
            const lang = v.lang.toLowerCase();
            const name = v.name.toLowerCase();
            return lang.startsWith('ka') || lang.startsWith('kat') || name.includes('natia') || name.includes('rhvoice');
        });
        if (kaVoices.length > 0) {
            kaVoices.forEach(voice => {
                const opt = document.createElement('option');
                opt.value = voice.name;
                opt.textContent = `${voice.name} (${voice.lang})`;
                selectVoice.appendChild(opt);
            });
        } else {
            const opt = document.createElement('option');
            opt.value = '';
            opt.textContent = '❌ 설치된 조지아어 시스템 음성이 없습니다.';
            selectVoice.appendChild(opt);
        }
    } else {
        // Predefined list
        ENGINES[engine].voices.forEach(voice => {
            const opt = document.createElement('option');
            opt.value = voice.id;
            opt.textContent = voice.name;
            selectVoice.appendChild(opt);
        });

        // Add custom voice if configured
        if (engine === 'elevenlabs' && state.apiKeys.elevenlabsVoice) {
            const opt = document.createElement('option');
            opt.value = state.apiKeys.elevenlabsVoice;
            opt.textContent = '👤 사용자 커스텀 조지아어 음성';
            selectVoice.insertBefore(opt, selectVoice.firstChild);
            selectVoice.value = state.apiKeys.elevenlabsVoice;
        }
    }
}

// Set initial view
state.currentEngine = selectEngine.value;
updateEngineStatusBadge();
updateVoiceList();

// --- Event Handlers ---

// Change Engine
selectEngine.addEventListener('change', (e) => {
    state.currentEngine = e.target.value;
    updateEngineStatusBadge();
    updateVoiceList();
});

// Update Text Character Count
ttsInput.addEventListener('input', (e) => {
    const text = e.target.value;
    charCount.textContent = `${text.length} / 1000`;
});

// Clear Text Input
document.getElementById('btn-clear').addEventListener('click', () => {
    ttsInput.value = '';
    charCount.textContent = `0 / 1000`;
    ttsInput.focus();
});

// Copy Text
document.getElementById('btn-copy').addEventListener('click', () => {
    const text = ttsInput.value.trim();
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        const origText = document.getElementById('btn-copy').textContent;
        document.getElementById('btn-copy').textContent = '복사 완료!';
        setTimeout(() => {
            document.getElementById('btn-copy').textContent = origText;
        }, 1500);
    });
});

// Settings Modal Toggles
btnSettings.addEventListener('click', () => {
    inputElevenLabsKey.value = state.apiKeys.elevenlabs;
    inputElevenlabsVoice.value = state.apiKeys.elevenlabsVoice || '';
    inputGoogleKey.value = state.apiKeys.google;
    inputAzureKey.value = state.apiKeys.azure;
    inputAzureRegion.value = state.apiKeys.azureRegion;
    modalSettings.classList.remove('hidden');
});

function hideSettings() {
    modalSettings.classList.add('hidden');
}

btnCloseSettings.addEventListener('click', hideSettings);
btnCancelSettings.addEventListener('click', hideSettings);

btnSaveSettings.addEventListener('click', () => {
    state.apiKeys.elevenlabs = inputElevenLabsKey.value.trim() || DEFAULT_ELEVENLABS_KEY;
    state.apiKeys.elevenlabsVoice = inputElevenlabsVoice.value.trim();
    state.apiKeys.google = inputGoogleKey.value.trim();
    state.apiKeys.azure = inputAzureKey.value.trim();
    state.apiKeys.azureRegion = inputAzureRegion.value.trim() || 'eastus';

    // Store in localStorage
    localStorage.setItem('key_elevenlabs', state.apiKeys.elevenlabs);
    localStorage.setItem('key_elevenlabs_voice', state.apiKeys.elevenlabsVoice);
    localStorage.setItem('key_google', state.apiKeys.google);
    localStorage.setItem('key_azure', state.apiKeys.azure);
    localStorage.setItem('key_azure_region', state.apiKeys.azureRegion);

    hideSettings();
    updateEngineStatusBadge();
    updateVoiceList(); // Update dropdown with new custom voice
});

// Control sliders labels
rangeSpeed.addEventListener('input', (e) => {
    valSpeed.textContent = `${e.target.value}x`;
});

rangePitch.addEventListener('input', (e) => {
    valPitch.textContent = `${e.target.value}`;
});

// --- Dynamic Components Generator ---

// 1. Virtual Keyboard Generator
function generateKeyboard() {
    // 3 rows of 11 characters
    const rows = [
        ["ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ", "ი", "კ", "ლ"],
        ["მ", "ნ", "ო", "პ", "ჟ", "რ", "ს", "ტ", "უ", "ფ", "ქ"],
        ["ღ", "ყ", "შ", "ჩ", "ც", "ძ", "წ", "ჭ", "ხ", "ჯ", "ჰ"]
    ];

    geoKeyboard.innerHTML = '';
    
    rows.forEach((rowKeys, index) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        
        rowKeys.forEach(char => {
            const keyBtn = document.createElement('button');
            keyBtn.className = 'key';
            keyBtn.textContent = char;
            keyBtn.addEventListener('click', () => insertAtCursor(char));
            rowDiv.appendChild(keyBtn);
        });

        // Add special buttons on specific rows
        if (index === 2) {
            // Space button
            const spaceBtn = document.createElement('button');
            spaceBtn.className = 'key space';
            spaceBtn.textContent = 'Space';
            spaceBtn.addEventListener('click', () => insertAtCursor(' '));
            rowDiv.appendChild(spaceBtn);

            // Backspace button
            const bsBtn = document.createElement('button');
            bsBtn.className = 'key backspace';
            bsBtn.textContent = '⌫';
            bsBtn.title = '지우기';
            bsBtn.addEventListener('click', () => deleteLastCharacter());
            rowDiv.appendChild(bsBtn);
        }

        geoKeyboard.appendChild(rowDiv);
    });
}

function insertAtCursor(text) {
    const startPos = ttsInput.selectionStart;
    const endPos = ttsInput.selectionEnd;
    const origText = ttsInput.value;
    
    ttsInput.value = origText.substring(0, startPos) + text + origText.substring(endPos, origText.length);
    ttsInput.focus();
    
    const newCursorPos = startPos + text.length;
    ttsInput.setSelectionRange(newCursorPos, newCursorPos);
    charCount.textContent = `${ttsInput.value.length} / 1000`;
}

function deleteLastCharacter() {
    const startPos = ttsInput.selectionStart;
    const endPos = ttsInput.selectionEnd;
    const origText = ttsInput.value;
    
    if (startPos === endPos && startPos > 0) {
        ttsInput.value = origText.substring(0, startPos - 1) + origText.substring(endPos, origText.length);
        const newCursorPos = startPos - 1;
        ttsInput.setSelectionRange(newCursorPos, newCursorPos);
    } else if (startPos !== endPos) {
        ttsInput.value = origText.substring(0, startPos) + origText.substring(endPos, origText.length);
        ttsInput.setSelectionRange(startPos, startPos);
    }
    
    ttsInput.focus();
    charCount.textContent = `${ttsInput.value.length} / 1000`;
}

// Toggle Keyboard view
btnToggleKeyboard.addEventListener('click', () => {
    state.keyboardOpen = !state.keyboardOpen;
    if (state.keyboardOpen) {
        geoKeyboard.classList.remove('hidden');
        btnToggleKeyboard.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            키보드 닫기
        `;
    } else {
        geoKeyboard.classList.add('hidden');
        btnToggleKeyboard.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="6" y1="8" x2="6" y2="8"></line><line x1="10" y1="8" x2="10" y2="8"></line><line x1="14" y1="8" x2="14" y2="8"></line><line x1="18" y1="8" x2="18" y2="8"></line><line x1="6" y1="12" x2="6" y2="12"></line><line x1="10" y1="12" x2="10" y2="12"></line><line x1="14" y1="12" x2="14" y2="12"></line><line x1="18" y1="12" x2="18" y2="12"></line><line x1="7" y1="16" x2="17" y2="16"></line></svg>
            가상 키보드
        `;
    }
});

// 2. Phrasebook Generator
const phraseListContainer = document.getElementById('phrase-list-container');
function loadPhrases() {
    phraseListContainer.innerHTML = '';
    const phrases = PHRASES[state.activeCategory];
    
    phrases.forEach(phrase => {
        const item = document.createElement('div');
        item.className = 'phrase-item';
        item.innerHTML = `
            <div class="phrase-text">
                <span class="phrase-geo">${phrase.geo}</span>
                <span class="phrase-trans">[${phrase.trans}]</span>
                <span class="phrase-kor">${phrase.kor}</span>
            </div>
            <div class="phrase-play-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
        `;
        
        item.addEventListener('click', () => {
            ttsInput.value = phrase.geo;
            charCount.textContent = `${phrase.geo.length} / 1000`;
            speakText(phrase.geo);
        });
        
        phraseListContainer.appendChild(item);
    });
}

categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        state.activeCategory = e.target.dataset.cat;
        loadPhrases();
    });
});

// 3. Alphabet Generator
const alphabetContainer = document.getElementById('alphabet-container');
function loadAlphabet() {
    alphabetContainer.innerHTML = '';
    ALPHABET.forEach(item => {
        const card = document.createElement('div');
        card.className = 'alphabet-card';
        card.innerHTML = `
            <span class="letter-geo">${item.char}</span>
            <span class="letter-name">${item.name}</span>
            <span class="letter-sound">${item.sound}</span>
        `;
        card.addEventListener('click', () => {
            insertAtCursor(item.char);
            speakText(item.char);
        });
        alphabetContainer.appendChild(card);
    });
}

// Tab Switching
tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        e.target.classList.add('active');
        const tabId = e.target.dataset.tab;
        document.getElementById(tabId).classList.add('active');
        state.activeTab = tabId;
    });
});

// 4. Render History
const historyContainer = document.getElementById('history-container');
function renderHistory() {
    historyContainer.innerHTML = '';
    if (state.history.length === 0) {
        historyContainer.innerHTML = '<div class="empty-state">최근 재생한 발음 내역이 없습니다.</div>';
        return;
    }

    state.history.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div class="history-content">
                <span class="history-geo" title="${item.text}">${item.text}</span>
                <span class="history-meta">${item.engine} · ${item.gender} · ${item.time}</span>
            </div>
            <div class="history-actions">
                <button class="icon-btn" style="width:28px; height:28px;" title="다시 재생">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <button class="history-del-btn" title="삭제">&times;</button>
            </div>
        `;

        // Click on play button or row to play
        div.querySelector('.icon-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            ttsInput.value = item.text;
            charCount.textContent = `${item.text.length} / 1000`;
            // Restore engine if possible
            if (document.querySelector(`#select-engine option[value="${item.engineId}"]`)) {
                selectEngine.value = item.engineId;
                state.currentEngine = item.engineId;
                updateEngineStatusBadge();
                updateVoiceList();
            }
            speakText(item.text);
        });

        // Click delete
        div.querySelector('.history-del-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            state.history.splice(index, 1);
            localStorage.setItem('geo_tts_history', JSON.stringify(state.history));
            renderHistory();
        });

        historyContainer.appendChild(div);
    });
}

document.getElementById('btn-clear-history').addEventListener('click', () => {
    state.history = [];
    localStorage.removeItem('geo_tts_history');
    renderHistory();
});

function addToHistory(text, engineId, voiceId) {
    const now = new Date();
    const timeStr = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // Identify gender/label
    let gender = "여성";
    if (engineId === 'elevenlabs') {
        const maleVoiceIds = ['ErXwobaYiN019PkySvjV', 'AZnzlk1XydvFTIaUrjgH', 'pNInz6obpgq5paNa6fD7'];
        if (maleVoiceIds.includes(voiceId)) gender = "남성";
    } else if (engineId === 'azure') {
        if (voiceId.includes('Giorgi')) gender = "남성";
    } else if (engineId === 'google-cloud') {
        if (voiceId.includes('Standard-B')) gender = "남성";
    }

    const engineName = ENGINES[engineId].name.split(' ')[0]; // E.g., 'ElevenLabs'

    // Remove duplicates
    state.history = state.history.filter(item => item.text !== text);
    
    state.history.unshift({
        text: text,
        engineId: engineId,
        engine: engineName,
        gender: gender,
        time: timeStr
    });

    // Limit to 20 items
    if (state.history.length > 20) {
        state.history.pop();
    }

    localStorage.setItem('geo_tts_history', JSON.stringify(state.history));
    renderHistory();
}


// --- TTS Speech Synthesis Core Logics ---

function updatePlaybackUI(newState) {
    state.playbackState = newState;
    
    if (newState === 'generating') {
        btnPlay.disabled = true;
        btnPlay.innerHTML = `
            <svg class="spinner" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="10"></circle></svg>
            생성 중...
        `;
        btnStop.disabled = false;
        btnDownload.disabled = true;
        audioStatus.textContent = '원어민 발음 오디오 생성 중...';
    } else if (newState === 'playing') {
        btnPlay.disabled = true;
        btnPlay.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            재생 중...
        `;
        btnStop.disabled = false;
        btnDownload.disabled = true;
        audioStatus.textContent = '재생 중...';
        startVisualizer();
    } else { // 'idle'
        btnPlay.disabled = false;
        btnPlay.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            발음 듣기
        `;
        btnStop.disabled = true;
        btnDownload.disabled = !state.audioUrl;
        audioStatus.textContent = state.audioUrl ? '재생 준비 완료' : '대기 중...';
        stopVisualizer();
    }
}

// Main trigger
btnPlay.addEventListener('click', () => {
    const text = ttsInput.value.trim();
    speakText(text);
});

btnStop.addEventListener('click', () => {
    stopPlayback();
});

function stopPlayback() {
    if (state.currentEngine === 'system') {
        if (typeof speechSynthesis !== 'undefined') {
            speechSynthesis.cancel();
        }
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    
    // Clear Google Translate queue
    state.googleQueue = [];
    state.googleQueueIndex = 0;
    
    updatePlaybackUI('idle');
}

// Handle Audio Element events
audioPlayer.addEventListener('play', () => {
    updatePlaybackUI('playing');
});

audioPlayer.addEventListener('pause', () => {
    if (state.playbackState === 'playing') {
        updatePlaybackUI('idle');
    }
});

audioPlayer.addEventListener('ended', () => {
    // Handle sequential play for Google Translate TTS if queue has remaining sentences
    if (state.currentEngine === 'free-google' && state.googleQueueIndex < state.googleQueue.length - 1) {
        state.googleQueueIndex++;
        audioStatus.textContent = `재생 중 (${state.googleQueueIndex + 1}/${state.googleQueue.length})...`;
        audioPlayer.src = state.googleQueue[state.googleQueueIndex];
        audioPlayer.play().catch(e => {
            console.error("Queue playback failed:", e);
            updatePlaybackUI('idle');
        });
    } else {
        updatePlaybackUI('idle');
    }
});

// Download button trigger
btnDownload.addEventListener('click', () => {
    if (!state.audioUrl) return;
    const a = document.createElement('a');
    a.href = state.audioUrl;
    a.download = `georgian_pronunciation_${Date.now()}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Unified speak function
async function speakText(text) {
    if (!text) {
        alert('발음할 조지아어 텍스트를 입력해 주세요!');
        return;
    }

    // Initialize audio context on first user interaction
    initAudioVisualizer(audioPlayer);

    stopPlayback();
    updatePlaybackUI('generating');

    // Dynamically adjust CORS attribute based on engine compatibility
    if (state.currentEngine === 'free-google') {
        audioPlayer.removeAttribute('crossorigin');
    } else {
        audioPlayer.setAttribute('crossorigin', 'anonymous');
    }
    
    const voiceId = selectVoice.value;
    const speed = parseFloat(rangeSpeed.value);
    const pitch = parseFloat(rangePitch.value);
    
    // Check if voice ID is empty (especially for system voices error)
    if (!voiceId && state.currentEngine === 'system') {
        alert('로컬 시스템에 조지아어 음성이 설치되어 있지 않습니다. 설정에서 다른 엔진(Free Google, ElevenLabs)을 이용해 주세요.');
        updatePlaybackUI('idle');
        return;
    }

    try {
        if (state.currentEngine === 'free-google') {
            await playFreeGoogleTTS(text, speed);
        } else if (state.currentEngine === 'elevenlabs') {
            await playElevenLabsTTS(text, voiceId, speed);
        } else if (state.currentEngine === 'google-cloud') {
            await playGoogleCloudTTS(text, voiceId, speed, pitch);
        } else if (state.currentEngine === 'azure') {
            await playAzureTTS(text, voiceId, speed, pitch);
        } else if (state.currentEngine === 'system') {
            await playSystemSpeech(text, voiceId, speed, pitch);
        }
        
        addToHistory(text, state.currentEngine, voiceId);
    } catch (error) {
        console.error("TTS synthesis error:", error);
        alert(`발음 생성 실패: ${error.message || error}`);
        updatePlaybackUI('idle');
    }
}

// 1. Google Translate TTS (Free Fallback)
async function playFreeGoogleTTS(text, speed) {
    // Google Translate TTS limits character length to ~200 chars. We split by punctuation.
    const segments = splitTextIntoSegments(text, 180);
    
    if (segments.length === 0) {
        throw new Error("텍스트를 구별 가능한 음성 구절로 변환하지 못했습니다.");
    }

    const urls = segments.map(seg => {
        return `https://translate.google.com/translate_tts?ie=UTF-8&tl=ka&client=tw-ob&q=${encodeURIComponent(seg)}`;
    });

    // Populate play queue
    state.googleQueue = urls;
    state.googleQueueIndex = 0;
    
    // Revoke old URL if any
    cleanAudioUrls();

    // Google Translate TTS does not generate download blob easily without proxy due to CORS.
    // However, we can fetch the first chunk directly to check if it's fine, or play directly.
    // For play, we can just load the audio URL.
    audioPlayer.src = urls[0];
    audioPlayer.playbackRate = speed;
    
    // Attempt to play
    audioStatus.textContent = segments.length > 1 ? `재생 중 (1/${segments.length})...` : '재생 중...';
    await audioPlayer.play();
}

function splitTextIntoSegments(text, maxLength) {
    // Split by punctuation (.,!?, ;: \n)
    const sentences = text.split(/([.,!?;\n]+)/);
    const segments = [];
    let currentSegment = "";

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        if (!sentence) continue;
        
        if ((currentSegment + sentence).length > maxLength) {
            if (currentSegment.trim()) {
                segments.push(currentSegment.trim());
            }
            currentSegment = sentence;
        } else {
            currentSegment += sentence;
        }
    }
    if (currentSegment.trim()) {
        segments.push(currentSegment.trim());
    }

    return segments.filter(s => s.length > 0);
}

// 2. ElevenLabs TTS
async function playElevenLabsTTS(text, voiceId, speed) {
    let response;
    
    if (state.isServerActive) {
        // Use local proxy server (.env key)
        response = await fetch(`${getServerUrl()}/api/tts/elevenlabs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, voiceId })
        });
    } else {
        // Use client-side direct API
        const apiKey = state.apiKeys.elevenlabs;
        if (!apiKey) {
            throw new Error("ElevenLabs API Key가 설정되지 않았습니다. 상단 우측 톱니바퀴 아이콘을 클릭하여 설정해 주세요.");
        }

        response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
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
    }

    if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || errJson.detail?.status || errJson.detail?.message || `HTTP 에러 ${response.status}`);
    }

    const blob = await response.blob();
    
    cleanAudioUrls();
    
    state.audioBlob = blob;
    state.audioUrl = URL.createObjectURL(blob);
    
    audioPlayer.src = state.audioUrl;
    audioPlayer.playbackRate = speed;
    await audioPlayer.play();
}

// 3. Google Cloud TTS
async function playGoogleCloudTTS(text, voiceId, speed, pitch) {
    let response;
    
    if (state.isServerActive) {
        // Use local proxy server (.env key)
        response = await fetch(`${getServerUrl()}/api/tts/google-cloud`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, voiceId, speed, pitch })
        });
    } else {
        // Use client-side direct API
        const apiKey = state.apiKeys.google;
        if (!apiKey) {
            throw new Error("Google Cloud API Key가 설정되지 않았습니다. 상단 우측 톱니바퀴 아이콘을 클릭하여 설정해 주세요.");
        }

        const semitonePitch = (pitch - 1.0) * 12.0;

        response = await fetch(`https://texttospeech.googleapis.com/v1/texttospeech:synthesize?key=${apiKey}`, {
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
    }

    if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || errJson.error?.message || `HTTP 에러 ${response.status}`);
    }

    let audioBlob;
    if (state.isServerActive) {
        audioBlob = await response.blob();
    } else {
        const json = await response.json();
        audioBlob = base64toBlob(json.audioContent, 'audio/mp3');
    }
    
    cleanAudioUrls();

    state.audioBlob = audioBlob;
    state.audioUrl = URL.createObjectURL(audioBlob);
    
    audioPlayer.src = state.audioUrl;
    audioPlayer.playbackRate = 1.0; // Handled API-side
    await audioPlayer.play();
}

// 4. Microsoft Azure Neural TTS
async function playAzureTTS(text, voiceId, speed, pitch) {
    let response;
    
    if (state.isServerActive) {
        // Use local proxy server (.env key)
        response = await fetch(`${getServerUrl()}/api/tts/azure`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, voiceId, speed, pitch })
        });
    } else {
        // Use client-side direct API
        const apiKey = state.apiKeys.azure;
        const region = state.apiKeys.azureRegion;
        
        if (!apiKey || !region) {
            throw new Error("Azure API Key 또는 지역(Region)이 설정되지 않았습니다. 설정창에서 확인해 주세요.");
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

        response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey,
                'Content-Type': 'application/ssml+xml',
                'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
                'User-Agent': 'GeoVoiceTTS'
            },
            body: ssml
        });
    }

    if (!response.ok) {
        const errMsg = state.isServerActive 
            ? (await response.json().catch(() => ({}))).error 
            : await response.text().catch(() => '');
        throw new Error(errMsg || `HTTP 에러 ${response.status}`);
    }

    const blob = await response.blob();
    
    cleanAudioUrls();
    
    state.audioBlob = blob;
    state.audioUrl = URL.createObjectURL(blob);
    
    audioPlayer.src = state.audioUrl;
    audioPlayer.playbackRate = 1.0; // Handled API-side
    await audioPlayer.play();
}

// 5. System Speech (Web Speech Synthesis API)
function playSystemSpeech(text, voiceName, speed, pitch) {
    return new Promise((resolve, reject) => {
        if (typeof speechSynthesis === 'undefined') {
            return reject("해당 브라우저는 Web Speech API를 지원하지 않습니다.");
        }

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Find matching voice object
        const voiceObj = systemVoices.find(v => v.name === voiceName);
        if (voiceObj) {
            utterance.voice = voiceObj;
        }
        
        utterance.rate = speed;
        utterance.pitch = pitch;
        utterance.lang = voiceObj ? voiceObj.lang : 'ka-GE';

        utterance.onstart = () => {
            updatePlaybackUI('playing');
        };

        utterance.onend = () => {
            updatePlaybackUI('idle');
            resolve();
        };

        utterance.onerror = (e) => {
            updatePlaybackUI('idle');
            reject(new Error(`시스템 TTS 에러: ${e.error}`));
        };

        // Trigger synthesis
        speechSynthesis.speak(utterance);
    });
}

// Helper: Clean old Audio object URLs to prevent memory leak
function cleanAudioUrls() {
    if (state.audioUrl) {
        URL.revokeObjectURL(state.audioUrl);
        state.audioUrl = null;
        state.audioBlob = null;
    }
}

// Helper: base64 to Blob converter
function base64toBlob(base64Data, contentType = '') {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);

        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters.charCodeAt(offset);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

async function checkServerStatus() {
    try {
        const res = await fetch(`${getServerUrl()}/api/config`);
        if (res.ok) {
            const config = await res.json();
            state.isServerActive = true;
            state.serverConfig = config;
            console.log("Local proxy server detected. Secure .env mode enabled.");
        } else {
            state.isServerActive = false;
        }
    } catch (e) {
        console.log("No local proxy server detected. Direct browser-to-API mode enabled.");
        state.isServerActive = false;
    }
    updateEngineStatusBadge();
}

// --- Page Load Event Trigger ---
window.addEventListener('DOMContentLoaded', async () => {
    generateKeyboard();
    loadPhrases();
    loadAlphabet();
    
    // Load history from localStorage after DOM is fully loaded and initialized
    try {
        const savedHistory = localStorage.getItem('geo_tts_history');
        if (savedHistory) {
            state.history = JSON.parse(savedHistory);
        }
    } catch (e) {
        console.error("Failed to load history:", e);
    }
    
    renderHistory();
    await checkServerStatus();
});
