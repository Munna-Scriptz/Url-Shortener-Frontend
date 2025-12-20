import React, { useState } from 'react'
import { Copy, Link, ArrowRight, BarChart, QrCode, CheckCircle, Sparkles } from 'lucide-react';

const Hero = () => {
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
    return (
        <>
            <main id='Hero'>
                <div className="container">
                    <div id="Hero-Row">
                        <main
                            className="relative z-10 flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center text-white">

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-fuchsia-300 mb-6">
                                <Sparkles size={12} />
                                <span>New: AI-Powered Analytics</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-text-glow">
                                Shorten Links. <br />
                                <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-linear">
                                    Expand Reach.
                                </span>
                            </h1>


                            <p className="text-slate-400 text-lg max-w-2xl mb-12 animate-float">
                                The most aesthetic URL shortener on the internet. Transform messy links into clean, trackable assets in one click.
                            </p>


                            {/* --- INPUT BOX --- */}
                            <div className="w-full max-w-3xl relative group z-20">
                                <div className="absolute -inset-1 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-20 blur group-hover:opacity-60 transition duration-500"></div>

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
                                    <button
                                        onClick={handleShorten}
                                        disabled={isLoading}
                                        className="w-full md:w-auto px-8 h-12 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 relative"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <>Shorten <ArrowRight size={18} /></>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* --- RESULT REVEAL (AnimatePresence for Exit Animations) --- */}
                            <div>
                                {shortUrl && (
                                    <div
                                        className="mt-10 w-full max-w-lg z-20"
                                    >
                                        <div className="relative p-0.5 rounded-2xl bg-linear-to-r from-violet-500/50 to-fuchsia-500/50">
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

                                                    <button
                                                        onClick={handleCopy}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isCopied ? 'bg-green-500/20 text-green-400' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                                    >
                                                        {isCopied ? <CheckCircle size={16} /> : <Copy size={16} />}
                                                        {isCopied ? 'Copied!' : 'Copy'}
                                                    </button>
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
                                    </div>
                                )}
                            </div>

                        </main>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero