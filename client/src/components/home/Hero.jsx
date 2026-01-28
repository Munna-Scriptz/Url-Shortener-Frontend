import React, { useState } from 'react'
import { Sparkles } from 'lucide-react';
import ShortenerInput from './ShortenerInput';

const Hero = () => {
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

                            <h1 className="text-[40px] md:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-text-glow">
                                Shorten Links. <br />
                                <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-linear">
                                    Expand Reach.
                                </span>
                            </h1>


                            <p className="text-slate-400 text-sm max-w-2xl mb-12 animate-float">
                                The most aesthetic URL shortener on the internet. Transform messy links into clean, trackable assets in one click.
                            </p>


                            {/* --- INPUT BOX --- */}
                            <ShortenerInput />

                            {/* --- RESULT REVEAL --- */}
                            

                        </main>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero