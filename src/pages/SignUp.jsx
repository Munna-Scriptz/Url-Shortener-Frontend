import React from 'react';
import { Scissors, Mail, Lock, User, Github, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import Input from '../components/ui/Input';
import Button from '../components/ui/Buttons';

const SignUp = () => {
    return (
        <>
            <main id='sign-Up' className='py-15'>
                <div className="container">
                    <div id="sign-Up-Row" className="min-h-screen text-white font-sans selection:bg-Secondary overflow-hidden relative flex items-center justify-center px-4">

                        {/* --- REUSE THE DECORATIONS FROM HOME --- */}
                        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                            <div className="absolute inset-0 bg-grid opacity-20"></div>
                            <div className="absolute -top-24 -left-24 w-125 h-125 bg-brand/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute -bottom-24 -right-24 w-125 h-125 bg-Secondary/10 rounded-full blur-[120px]" />
                        </div>

                        {/* --- SIGN UP CARD --- */}
                        <div className="relative z-10 w-full max-w-md animate-signup">

                            {/* Logo Section */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter cursor-pointer group">
                                    <div
                                        className="p-2 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-lg shadow-lg shadow-violet-500/20"
                                    >
                                        <Scissors className="text-white" size={24} />
                                    </div>
                                </div>
                                <h1 className="text-3xl font-black tracking-tight">Join <span className="text-Secondary">SnipIt.</span></h1>
                                <p className="text-slate-400 mt-2 text-sm">Start creating aesthetic links today.</p>
                            </div>

                            {/* The Glass Card */}
                            <div className="bg-primarySurface/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                                    {/* Name Input */}
                                    <Input
                                        leftIcon={<User size={18} />}
                                        label={'Full Name'}
                                        variant='signUp'
                                        type="text"
                                        placeholder="Munna"
                                    />

                                    {/* Email Input */}
                                    <Input
                                        leftIcon={<Mail size={18} />}
                                        label={'Email Address'}
                                        variant='signUp'
                                        type="email"
                                        placeholder="hello@example.com"
                                    />

                                    {/* Password Input */}
                                    <Input
                                        leftIcon={<Lock size={18} />}
                                        label={'Password'}
                                        variant='signUp'
                                        type="password"
                                        placeholder="••••••••"
                                    />

                                    {/* Submit Button */}
                                    <Button variant='sinInAndSignUp'>
                                        Create Account <ArrowRight size={18} />
                                    </Button>
                                </form>

                                {/* Divider */}
                                <div className="flex items-center gap-4 my-8">
                                    <div className="h-px flex-1 bg-white/5"></div>
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Or continue with</span>
                                    <div className="h-px flex-1 bg-white/5"></div>
                                </div>

                                {/* Social Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-sm font-medium">
                                        <Github size={18} /> GitHub
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-sm font-medium">
                                        <img src="https://www.google.com/favicon.ico" alt="google" className="w-4 h-4 grayscale" /> Google
                                    </button>
                                </div>
                            </div>

                            {/* Footer Link */}
                            <p className="text-center mt-8 text-slate-500 text-sm">
                                Already have an account? <Link to={'/sign-in'} className="text-Secondary font-bold cursor-pointer hover:underline">Sign In</Link>
                            </p>
                        </div>

                        {/* Floating Sparkle Decoration */}
                        <div className="absolute top-1/4 right-1/4 animate-bounce opacity-20">
                            <Sparkles className="text-brand" size={40} />
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default SignUp;  