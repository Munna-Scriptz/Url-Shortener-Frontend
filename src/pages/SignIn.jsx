import React from 'react';
import { Scissors, Mail, Lock, LogIn, Github, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <>
            <main id='content' className='py-15'>
                <div className="container">
                    <div id="content-Row" className="min-h-screen text-white font-sans overflow-hidden relative flex items-center justify-center px-4">
                        {/* --- BACKGROUND DECO (Consistent with Theme) --- */}
                        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                            <div className="absolute inset-0 bg-grid opacity-20"></div>
                            {/* Swapping the glows for a different look than Sign Up */}
                            <div className="absolute -bottom-24 -left-24 w-125 h-125 bg-brand/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute -top-24 -right-24 w-125 h-125 bg-Secondary/10 rounded-full blur-[120px]" />
                        </div>

                        {/* --- SIGN IN CARD --- */}
                        <div className="relative z-10 w-full max-w-md animate-signup">

                            {/* Header Section */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm mb-4 group cursor-pointer">
                                    <LogIn className="text-Secondary group-hover:scale-110 transition-transform" size={28} />
                                </div>
                                <h1 className="text-3xl font-black tracking-tight">Welcome <span className="bg-linear-to-r from-brand to-Secondary bg-clip-text text-transparent">Back.</span></h1>
                                <p className="text-slate-500 mt-2 text-sm font-medium">Log in to manage your snips.</p>
                            </div>

                            {/* The Glass Card */}
                            <div className="bg-primarySurface/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                                {/* Subtle top light effect */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-50"></div>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-brand transition-colors" size={18} />
                                            <input
                                                type="email"
                                                placeholder="shadow@snipit.com"
                                                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand/50 focus:bg-black/60 transition-all text-sm placeholder:text-slate-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">password</label>
                                            <span className="text-[10px] font-bold text-brand cursor-pointer hover:text-Secondary transition-colors">Forgot?</span>
                                        </div>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-brand transition-colors" size={18} />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand/50 focus:bg-black/60 transition-all text-sm placeholder:text-slate-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Remember Me Toggle */}
                                    <div className="flex items-center gap-2 px-1">
                                        <input type="checkbox" className="w-4 h-4 rounded bg-slate-800 border-white/10 accent-brand" id="remember" />
                                        <label htmlFor="remember" className="text-xs text-slate-400 select-none cursor-pointer">Stay logged in for 30 days</label>
                                    </div>

                                    {/* Sign In Button */}
                                    <button className="w-full py-4 cursor-pointer bg-white text-slate-950 rounded-xl font-black text-sm hover:bg-brand hover:text-white active:scale-[0.96] transition-all duration-300 flex items-center justify-center gap-2 group">
                                        Log In to SnipIt <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>

                                {/* Social Auth */}
                                <div className="mt-8 flex flex-col gap-3">
                                    <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest">
                                        <img src="https://www.google.com/favicon.ico" alt="google" className="w-4 h-4 grayscale group-hover:grayscale-0" />
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Switcher */}
                            <p className="text-center mt-8 text-slate-500 text-sm">
                                New to the future? <Link to={'/sign-up'} className="text-brand font-bold cursor-pointer hover:text-Secondary transition-colors">Create Account</Link>
                            </p>
                        </div>

                        {/* Small Security Badge Deco */}
                        <div className="absolute bottom-8 right-8 flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest opacity-40">
                            <ShieldCheck size={14} /> End-to-end Encrypted
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SignIn;