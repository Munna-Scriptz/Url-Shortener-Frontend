import React from 'react'
import { Copy, Link, Scissors, BarChart, Globe, Sparkles } from 'lucide-react';

const Instructions = () => {
    const cards = [
        { icon: <Link />, color: "text-blue-400", bg: "bg-blue-500/10", title: "1. Paste Your Link", desc: "Copy your long, messy URL from any website and paste it into the input field above." },
        { icon: <Sparkles />, color: "text-amber-400", bg: "bg-amber-500/10", title: "2. Custom Alias", desc: "Want a specific name? Set a custom alias to make your link memorable and catchy." },
        { icon: <Scissors />, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", title: "3. Click Shorten", desc: "Hit the button and watch our powerful engine compress your link in milliseconds." },
        { icon: <Copy />, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "4. Copy & Share", desc: "Grab your new short link or generate a QR code to share on social media, email, or SMS." },
        { icon: <Globe />, color: "text-cyan-400", bg: "bg-cyan-500/10", title: "5. Global Access", desc: "Your link is instantly live worldwide with 99.9% uptime and lightning fast redirects." },
        { icon: <BarChart />, color: "text-violet-400", bg: "bg-violet-500/10", title: "6. Track Analytics", desc: "Monitor clicks, geographic locations, and devices in real-time from your dashboard." },
    ]
    return (
        <>
            <>
                <main id='Instructions'>
                    <div className="container">
                        <div id="Instructions-Row">
                            <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="h-px flex-1 bg-linear-to-r from-transparent to-slate-800"></div>
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">How It Works</span>
                                    <div className="h-px flex-1 bg-linear-to-l from-transparent to-slate-800"></div>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                                    {/* Instructions Data Map */}
                                    {cards.map((item, index) => (
                                        <div key={index} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-white/10 transition-colors group">
                                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="flex items-center gap-2 text-lg font-bold mb-2 text-white">
                                                {item.title}
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </>
        </>
    )
}

export default Instructions