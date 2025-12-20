import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // The secret sauce
import { Copy, Link, ArrowRight, Scissors, Zap, Shield, BarChart, QrCode, Globe, CheckCircle, Sparkles, MoveUpRight } from 'lucide-react';

const Home = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleShorten = () => {
        if (!longUrl) return;
        setIsLoading(true);
        setShortUrl('');

        setTimeout(() => {
            setShortUrl(`shrt.ly/${Math.random().toString(36).substr(2, 6)}`);
            setIsLoading(false);
        }, 1200);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // --- Animation Variants (The "Choreography") ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 } // Delays each child slightly
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-hidden relative">

            {/* --- DECORATIONS: Cyber Grid & Floating Orbs --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                {/* Moving Blobs using Framer Motion */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px]"
                />
            </div>

            {/* --- NAVBAR --- */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md bg-slate-900/40 border-b border-white/5"
            >
                <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter cursor-pointer group">
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        className="p-2 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg shadow-lg shadow-violet-500/20"
                    >
                        <Scissors className="text-white" size={20} />
                    </motion.div>
                    <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">SnipIt.</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    {['Home', 'Dashboard', 'All URLs', 'History'].map((item) => (
                        <a key={item} href="#" className="relative group hover:text-white transition-colors">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 py-2.5 text-sm font-bold text-white bg-slate-800 rounded-full overflow-hidden group border border-white/10"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10">Sign Up</span>
                    </motion.button>
                </div>
            </motion.nav>

            {/* --- HERO SECTION --- */}
            <motion.main
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center"
            >

                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-fuchsia-300 mb-6">
                    <Sparkles size={12} />
                    <span>New: AI-Powered Analytics</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                    Shorten Links. <br />
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                        Expand Reach.
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-slate-400 text-lg max-w-2xl mb-12">
                    The most aesthetic URL shortener on the internet. Transform messy links into clean, trackable assets in one click.
                </motion.p>

                {/* --- INPUT BOX --- */}
                <motion.div variants={itemVariants} className="w-full max-w-3xl relative group z-20">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-20 blur group-hover:opacity-60 transition duration-500"></div>

                    <div className="relative flex flex-col md:flex-row items-center gap-2 p-2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl">
                        <div className="flex-1 flex items-center px-4 h-14 w-full">
                            <Link className="text-slate-500 mr-3 group-focus-within:text-violet-400 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Paste your insanely long URL here..."
                                className="bg-transparent border-none outline-none text-white w-full placeholder-slate-600 h-full text-lg"
                                value={longUrl}
                                onChange={(e) => setLongUrl(e.target.value)}
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleShorten}
                            disabled={isLoading}
                            className="w-full md:w-auto px-8 h-12 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 relative"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>Shorten <ArrowRight size={18} /></>
                            )}
                        </motion.button>
                    </div>
                </motion.div>

                {/* --- RESULT REVEAL (AnimatePresence for Exit Animations) --- */}
                <AnimatePresence>
                    {shortUrl && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                            className="mt-10 w-full max-w-lg z-20"
                        >
                            <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50">
                                <div className="bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl flex flex-col gap-4 text-left shadow-2xl shadow-violet-900/20">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Success!</span>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 group hover:border-violet-500/30 transition-colors">
                                        <span className="text-xl font-mono text-fuchsia-300 font-medium tracking-tight truncate mr-4">
                                            {shortUrl}
                                        </span>

                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            onClick={handleCopy}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isCopied ? 'bg-green-500/20 text-green-400' : 'bg-white/10 hover:bg-white/20 text-white'
                                                }`}
                                        >
                                            {isCopied ? <CheckCircle size={16} /> : <Copy size={16} />}
                                            {isCopied ? 'Copied!' : 'Copy'}
                                        </motion.button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-2">
                                        <button className="py-2.5 rounded-lg bg-violet-500/10 text-violet-300 text-xs font-bold hover:bg-violet-500/20 transition-colors flex items-center justify-center gap-2">
                                            <QrCode size={14} /> Get QR Code
                                        </button>
                                        <button className="py-2.5 rounded-lg bg-fuchsia-500/10 text-fuchsia-300 text-xs font-bold hover:bg-fuchsia-500/20 transition-colors flex items-center justify-center gap-2">
                                            <BarChart size={14} /> View Stats
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.main>

            {/* --- INSTRUCTIONS (Staggered Grid) --- */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="flex items-center gap-3 mb-10">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800"></div>
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">How It Works</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Instructions Data Map */}
                    {[
                        { icon: <Link />, color: "text-blue-400", bg: "bg-blue-500/10", title: "1. Paste Your Link", desc: "Copy your long, messy URL from any website and paste it into the input field above." },
                        { icon: <Sparkles />, color: "text-amber-400", bg: "bg-amber-500/10", title: "2. Custom Alias", desc: "Want a specific name? Set a custom alias to make your link memorable and catchy." },
                        { icon: <Scissors />, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", title: "3. Click Shorten", desc: "Hit the button and watch our powerful engine compress your link in milliseconds." },
                        { icon: <Copy />, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "4. Copy & Share", desc: "Grab your new short link or generate a QR code to share on social media, email, or SMS." },
                        { icon: <Globe />, color: "text-cyan-400", bg: "bg-cyan-500/10", title: "5. Global Access", desc: "Your link is instantly live worldwide with 99.9% uptime and lightning fast redirects." },
                        { icon: <BarChart />, color: "text-violet-400", bg: "bg-violet-500/10", title: "6. Track Analytics", desc: "Monitor clicks, geographic locations, and devices in real-time from your dashboard." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-white/10 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            <h3 className="flex items-center gap-2 text-lg font-bold mb-2 text-white">
                                {item.title}
                                <MoveUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
                <p className="text-slate-600 text-sm">© 2025 SnipIt. Built with 💜 by Munna.</p>
            </footer>

        </div>
    );
};

export default Home;