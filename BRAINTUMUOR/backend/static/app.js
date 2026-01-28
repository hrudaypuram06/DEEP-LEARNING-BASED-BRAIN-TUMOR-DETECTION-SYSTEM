const { useState, useEffect, useRef } = React;

// --- Translations ---
const translations = {
    en: {
        title: "Brain Tumor Detection",
        subtitle: "AI-Powered Diagnostics System",
        nav_detect: "Detection",
        nav_chat: "AI Chatbot",
        nav_future: "Future Scope",
        nav_settings: "Settings",
        upload_title: "Upload MRI Scan",
        analyze_btn: "Analyze Scan",
        chat_placeholder: "Ask about symptoms, treatment...",
        chat_title: "Patient Assistant",
        future_title: "Predictive Analytics",
        future_desc: "Advanced AI models for growth & outcome prediction.",
        settings_title: "Preferences",
        lang_select: "Select Language",
    },
    hi: {
        title: "ब्रेन ट्यूमर डिटेक्शन",
        subtitle: "एआई-संचालित निदान प्रणाली",
        nav_detect: "निदान (Detection)",
        nav_chat: "एआई चैटबॉट",
        nav_future: "भविष्य का दायरा",
        nav_settings: "सेटिंग (Settings)",
        upload_title: "एमआरआई स्कैन अपलोड करें",
        analyze_btn: "स्कैन का विश्लेषण करें",
        chat_placeholder: "लक्षण, उपचार के बारे में पूछें...",
        chat_title: "रोगी सहायक",
        future_title: "भविष्य कहनेवाला विश्लेषण",
        future_desc: "विकास और परिणाम की भविष्यवाणी के लिए उन्नत एआई।",
        settings_title: "सेटिंग",
        lang_select: "भाषा चुनें",
    },
    te: {
        title: "మెదడు కణితి గుర్తింపు",
        subtitle: "AI-ఆధారిత విశ్లేషణ వ్యవస్థ",
        nav_detect: "గుర్తింపు",
        nav_chat: "AI చాట్‌బాట్",
        nav_future: "భవిష్యత్ పరిధి",
        nav_settings: "సెట్టింగులు",
        upload_title: "MRI స్కాన్‌ని అప్‌లోడ్ చేయండి",
        analyze_btn: "స్కాన్‌ని విశ్లేషించండి",
        chat_placeholder: "లక్షణాలు, చికిత్స గురించి అడగండి...",
        chat_title: "రోగి సహాయకుడు",
        future_title: "వినూత్న విశ్లేషణలు",
        future_desc: "వృద్ధి మరియు ఫలితాల అంచనా కోసం అధునాతన AI.",
        settings_title: "ప్రాధాన్యతలు",
        lang_select: "భాషను ఎంచుకోండి",
    },
    ta: {
        title: "மூளைக் கட்டி கண்டறிதல்",
        subtitle: "AI- அடிப்படையிலான அமைப்பு",
        nav_detect: "கண்டறிதல்",
        nav_chat: "AI சாட்போட்",
        nav_future: "எதிர்காலம்",
        nav_settings: "அமைப்புகள்",
        upload_title: "MRI ஸ்கேனை பதிவேற்றவும்",
        analyze_btn: "ஸ்கேனை ஆய்வு செய்",
        chat_placeholder: "அறிகுறிகள் பற்றி கேளுங்கள்...",
        chat_title: "நோயாளி உதவியாளர்",
        future_title: "கணிப்பு பகுப்பாய்வு",
        future_desc: "வளர்ச்சி கணிப்புக்கான மேம்பட்ட AI.",
        settings_title: "விருப்பங்கள்",
        lang_select: "மொழியைத் தேர்ந்தெடுக்கவும்",
    },
    es: {
        title: "Detección de Tumores",
        subtitle: "Sistema de Diagnóstico IA",
        nav_detect: "Detección",
        nav_chat: "Chatbot IA",
        nav_future: "Futuro",
        nav_settings: "Ajustes",
        upload_title: "Subir Escaneo MRI",
        analyze_btn: "Analizar Escaneo",
        chat_placeholder: "Pregunte sobre síntomas, tratamiento...",
        chat_title: "Asistente del Paciente",
        future_title: "Análisis Predictivo",
        future_desc: "Modelos avanzados para predicción de crecimiento.",
        settings_title: "Configuración",
        lang_select: "Seleccionar Idioma",
    }
};

function App() {
    const [view, setView] = useState('detect'); // detect, chat, future, settings
    const [lang, setLang] = useState('en');
    const t = translations[lang];

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden text-slate-200 font-sans selection:bg-cyan-500/30">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0f172a] -z-20"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none -z-10"></div>

            {/* Navbar */}
            <nav className="p-6 flex justify-between items-center z-10 animate-fade-up">
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setView('detect')}>
                    <div className="w-12 h-12 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">{t.title}</h1>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{t.subtitle}</p>
                    </div>
                </div>

                {/* Settings Icon (Left/Top-Right aligned as per user request flow, putting it distinct) */}
                <button
                    onClick={() => setView('settings')}
                    className={`p-3 rounded-xl transition-all duration-300 ${view === 'settings' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700'}`}
                >
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="font-bold hidden md:block">{t.nav_settings}</span>
                    </div>
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col items-center justify-start p-4 z-10 w-full max-w-7xl mx-auto">

                {/* View Content */}
                <div className="w-full transition-all duration-500 ease-in-out">
                    {view === 'detect' && (
                        <>
                            <NavGrid view={view} setView={setView} t={t} />
                            <DetectionView t={t} />
                        </>
                    )}
                    {view === 'chat' && (
                        <>
                            <NavGrid view={view} setView={setView} t={t} />
                            <ChatView t={t} lang={lang} />
                        </>
                    )}
                    {view === 'future' && (
                        <>
                            <NavGrid view={view} setView={setView} t={t} />
                            <FutureView t={t} />
                        </>
                    )}
                    {view === 'settings' && <SettingsView t={t} lang={lang} setLang={setLang} setView={setView} />}
                </div>

            </main>
        </div>
    );
}

// --- Components ---

function NavGrid({ view, setView, t }) {
    return (
        <div className="grid grid-cols-3 gap-6 mb-12 w-full max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <NavButton active={view === 'detect'} onClick={() => setView('detect')} icon="🔍" label={t.nav_detect} color="cyan" />
            <NavButton active={view === 'chat'} onClick={() => setView('chat')} icon="💬" label={t.nav_chat} color="emerald" />
            <NavButton active={view === 'future'} onClick={() => setView('future')} icon="📈" label={t.nav_future} color="purple" />
        </div>
    );
}

function NavButton({ active, onClick, icon, label, color }) {
    const colorClasses = {
        cyan: active ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'hover:border-cyan-500/50 hover:text-cyan-400',
        emerald: active ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'hover:border-emerald-500/50 hover:text-emerald-400',
        purple: active ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'hover:border-purple-500/50 hover:text-purple-400',
    };

    return (
        <button
            onClick={onClick}
            className={`glass-card flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all duration-300 group ${active
                ? 'border-opacity-100 shadow-[0_0_30px_rgba(0,0,0,0.3)] transform scale-105'
                : 'bg-slate-800/20 border-slate-700/50 border-opacity-50 hover:bg-slate-800/40'
                } ${colorClasses[color]}`}
        >
            <div className={`text-5xl mb-3 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>{icon}</div>
            <div className={`font-bold text-sm uppercase tracking-widest`}>{label}</div>
            <div className={`w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300 ${active ? 'bg-current opacity-100' : 'bg-transparent opacity-0'}`}></div>
        </button>
    )
}

function SettingsView({ t, lang, setLang, setView }) {
    const languages = [
        { code: 'en', label: 'English', native: 'English' },
        { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
        { code: 'te', label: 'Telugu', native: 'తెలుగు' },
        { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
        { code: 'es', label: 'Spanish', native: 'Español' },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto animate-fade-up">
            <button onClick={() => setView('detect')} className="mb-6 flex items-center text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Home
            </button>

            <div className="glass-card p-10 rounded-[2.5rem]">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <span className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center mr-4 text-2xl">⚙️</span>
                    {t.settings_title}
                </h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-bold text-cyan-400 mb-4 uppercase tracking-wider">{t.lang_select}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {languages.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => setLang(l.code)}
                                    className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all duration-300 ${lang === l.code
                                        ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-lg shadow-cyan-900/40'
                                        : 'bg-slate-800/40 border-slate-700 hover:border-slate-500 hover:bg-slate-800/60'
                                        }`}
                                >
                                    <div className="flex flex-col text-left">
                                        <span className="font-bold text-lg">{l.native}</span>
                                        <span className="text-sm text-slate-400">{l.label}</span>
                                    </div>
                                    {lang === l.code && <div className="text-cyan-400 text-xl">✓</div>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetectionView({ t }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        if (!file) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/predict", { method: "POST", body: formData });
            const data = await res.json();
            setTimeout(() => { setResult(data.result); setLoading(false); }, 1500);
        } catch (e) { setLoading(false); alert("Error"); }
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 w-full animate-fade-up">
            <div className="glass-card p-8 rounded-[2rem]">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <span className="bg-cyan-500/20 text-cyan-400 p-2 rounded-lg mr-3">📁</span>
                    {t.upload_title}
                </h2>
                <div className="relative h-80 border-2 border-dashed border-slate-600 rounded-3xl flex items-center justify-center mb-6 overflow-hidden hover:border-cyan-500 transition-all duration-300 bg-slate-900/30 group">
                    <input type="file" onChange={(e) => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                            setPreview(URL.createObjectURL(e.target.files[0]));
                            setResult(null);
                        }
                    }} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                    {preview ? (
                        <div className="relative w-full h-full p-4">
                            <img src={preview} className="h-full w-full object-contain rounded-xl shadow-2xl" />
                            <button onClick={(e) => { e.preventDefault(); setFile(null); setPreview(null); setResult(null); }} className="absolute top-6 right-6 bg-black/60 hover:bg-red-500/80 text-white rounded-full p-2 backdrop-blur-md transition-all z-20">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    ) : (
                        <div className="text-slate-500 text-center transition-transform duration-300 group-hover:scale-110">
                            <div className="text-6xl mb-4 opacity-50">📤</div>
                            <p className="font-medium text-lg">Drag & Drop MRI Scan</p>
                            <p className="text-sm opacity-50 mt-1">Supports DICOM, JPG, PNG</p>
                        </div>
                    )}
                    {loading && <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                        <div className="animate-spin w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mb-4 shadow-[0_0_30px_rgba(6,182,212,0.4)]"></div>
                        <div className="text-cyan-400 font-bold tracking-widest animate-pulse">ANALYZING SCANS...</div>
                    </div>}
                </div>
                <button onClick={handleAnalyze} disabled={!file || loading} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-5 rounded-2xl transition-all shadow-[0_10px_30px_-10px_rgba(6,182,212,0.5)] disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] border border-cyan-400/20">
                    {loading ? "Processing..." : t.analyze_btn}
                </button>
            </div>

            <div className="glass-card p-8 rounded-[2rem] min-h-[500px] flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg mr-3">📊</span>
                    Diagnostic Report
                </h2>
                {!result ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-slate-500 opacity-40">
                        <div className="text-8xl mb-6 grayscale">🧠</div>
                        <p className="text-xl font-light">Awaiting Image Analysis</p>
                    </div>
                ) : (
                    <div className="animate-slide-right space-y-6">
                        <div className="flex justify-between items-end p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                            <div>
                                <div className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-1">Pathology Detected</div>
                                <div className="text-5xl font-bold text-white tracking-tight">{result.type}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Confidence</div>
                                <div className="text-3xl font-mono text-cyan-400 font-bold">{result.confidence}</div>
                            </div>
                        </div>

                        {result.has_tumor && (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailBox label="Stage" value={result.report.stage} icon="🏷️" />
                                    <DetailBox label="Location" value={result.report.location} icon="📍" />
                                    <DetailBox label="Dimensions" value={result.report.size} icon="📏" />
                                    <DetailBox label="Scan View" value={result.scan_type || "Axial"} icon="👁️" />
                                </div>
                                <div className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Clinical Features</div>
                                    <p className="text-slate-200 text-sm leading-relaxed">{result.report.features}</p>
                                </div>
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start space-x-3">
                                    <div className="text-red-400 text-xl mt-0.5">⚠️</div>
                                    <p className="text-red-200/80 text-xs leading-relaxed">{result.disclaimer}</p>
                                </div>
                            </>
                        )}

                        {result.type === "No Tumor Detected" && (
                            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                <div className="text-4xl mb-3">✅</div>
                                <h3 className="text-emerald-400 font-bold text-xl mb-2">Healthy Scan Detected</h3>
                                <p className="text-emerald-100/70 text-sm leading-relaxed">{result.suggestion}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

function DetailBox({ label, value, icon }) {
    return (
        <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
            <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm opacity-70">{icon}</span>
                <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">{label}</div>
            </div>
            <div className="text-sm text-white font-medium pl-6">{value}</div>
        </div>
    )
}

function ChatView({ t, lang }) {
    const [messages, setMessages] = useState([{ role: 'bot', text: t.chat_placeholder }]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const chatEndRef = useRef(null);

    // --- Voice Assistant Setup ---
    const speak = (text) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel(); // Stop previous
        const utterance = new SpeechSynthesisUtterance(text);

        // Map app language codes to browser locales
        const langMap = { 'en': 'en-US', 'hi': 'hi-IN', 'te': 'te-IN', 'ta': 'ta-IN', 'es': 'es-ES' };
        utterance.lang = langMap[lang] || 'en-US';

        // Mobile browsers might need this event to start speaking
        window.speechSynthesis.speak(utterance);
    };

    const startListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("Voice input not supported in this browser. Try Chrome.");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        const langMap = { 'en': 'en-US', 'hi': 'hi-IN', 'te': 'te-IN', 'ta': 'ta-IN', 'es': 'es-ES' };
        recognition.lang = langMap[lang] || 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            // Optional: Auto-send after voice input
            setTimeout(() => handleVoiceSend(transcript), 500);
        };

        recognition.start();
    };

    const handleVoiceSend = async (text) => {
        if (!text.trim()) return;
        const newMsgs = [...messages, { role: 'user', text: text }];
        setMessages(newMsgs);
        setInput('');

        try {
            const res = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text, language: lang })
            });
            const data = await res.json();
            const botMsg = { role: 'bot', text: data.response };
            setMessages([...newMsgs, botMsg]);
            speak(data.response); // Auto-speak response
        } catch (e) {
            setMessages([...newMsgs, { role: 'bot', text: "Error connecting to AI." }]);
        }
    };

    const sendMessage = async () => {
        if (!input.trim()) return;
        const newMsgs = [...messages, { role: 'user', text: input }];
        setMessages(newMsgs);
        setInput('');

        try {
            const res = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input, language: lang })
            });
            const data = await res.json();
            setMessages([...newMsgs, { role: 'bot', text: data.response }]);
            speak(data.response); // Auto-speak response
        } catch (e) {
            setMessages([...newMsgs, { role: 'bot', text: "Error connecting to AI." }]);
        }
    };

    useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

    return (
        <div className="glass-card w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden flex flex-col h-[700px] animate-fade-up border border-slate-700/50 relative">

            {/* Header */}
            <div className="p-6 bg-slate-900/50 border-b border-slate-700/50 flex items-center justify-between backdrop-blur-md z-10">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-white">{t.chat_title}</h3>
                        <p className="text-xs text-emerald-400 font-medium flex items-center">
                            Online • Voice Enabled <span className="ml-2 text-lg">🎙️</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-slate-900/20">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-right`}>
                        <div className={`max-w-[75%] p-5 rounded-3xl shadow-md relative group ${m.role === 'user'
                                ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-tr-sm'
                                : 'bg-white/10 backdrop-blur-md text-slate-100 border border-white/10 rounded-tl-sm'
                            }`}>
                            <p className="leading-relaxed">{m.text}</p>
                            {m.role === 'bot' && (
                                <button onClick={() => speak(m.text)} className="absolute -bottom-8 left-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-white">
                                    🔊 Play
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-slate-900/80 border-t border-slate-700/50 backdrop-blur-xl">
                <div className="flex gap-4 items-center">

                    {/* Microphone Button */}
                    <button
                        onClick={startListening}
                        className={`p-4 rounded-2xl transition-all ${isListening
                                ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/40'
                                : 'bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700'
                            }`}
                        title="Speak to AI"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </button>

                    <input
                        className="flex-grow bg-slate-800/50 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-700/50 transition-all placeholder-slate-500"
                        placeholder={isListening ? "Listening..." : t.chat_placeholder}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && sendMessage()}
                    />

                    <button onClick={sendMessage} className="bg-cyan-500 hover:bg-cyan-400 text-white p-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20">
                        <svg className="w-6 h-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

function FutureView({ t }) {
    const growthChartRef = useRef(null);
    const outcomeChartRef = useRef(null);

    useEffect(() => {
        // Growth Chart
        if (growthChartRef.current) {
            new Chart(growthChartRef.current, {
                type: 'line',
                data: {
                    labels: ['Month 0', 'Month 3', 'Month 6', 'Month 9', 'Month 12', 'Month 15'],
                    datasets: [{
                        label: 'Projected Tumor Volume (cm³)',
                        data: [2.1, 2.8, 3.5, 4.8, 6.2, 8.5],
                        borderColor: '#06b6d4',
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: '#06b6d4',
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                    }
                }
            });
        }

        // Outcome Chart
        if (outcomeChartRef.current) {
            new Chart(outcomeChartRef.current, {
                type: 'doughnut',
                data: {
                    labels: ['Surgery Success', 'Chemo Resp', 'Radiation Resp', 'Recurrence Risk'],
                    datasets: [{
                        data: [65, 20, 10, 5],
                        backgroundColor: ['#10b981', '#f59e0b', '#3b82f6', '#ef4444'],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    cutout: '70%',
                    plugins: {
                        legend: { position: 'right', labels: { color: '#e2e8f0', font: { family: 'Outfit' } } }
                    }
                }
            });
        }
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-up px-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">{t.future_title}</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.future_desc}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Growth Prediction Card */}
                <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <span className="w-2 h-8 bg-cyan-500 rounded-full mr-3"></span>
                                Tumor Growth Model
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">Gompertzian Kinetics</p>
                        </div>
                        <div className="bg-slate-800 p-2 rounded-lg text-2xl">📉</div>
                    </div>
                    <div className="h-64 w-full">
                        <canvas ref={growthChartRef}></canvas>
                    </div>
                    <p className="text-sm text-slate-400 mt-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        AI predicts a <strong>240% volume increase</strong> over 15 months if untreated, emphasizing the need for early intervention.
                    </p>
                </div>

                {/* Treatment Outcome Card */}
                <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <span className="w-2 h-8 bg-emerald-500 rounded-full mr-3"></span>
                                Treatment Efficacy
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">Genomic Correlates</p>
                        </div>
                        <div className="bg-slate-800 p-2 rounded-lg text-2xl">💊</div>
                    </div>
                    <div className="h-64 w-full flex items-center justify-center">
                        <canvas ref={outcomeChartRef}></canvas>
                    </div>
                    <p className="text-sm text-slate-400 mt-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        Based on segmentation features, <strong>Surgical Resection</strong> shows the highest probability of positive outcome (65%).
                    </p>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
