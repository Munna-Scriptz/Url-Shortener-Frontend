import { Scissors } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md bg-slate-900/40 border-b border-white/5">
                <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter cursor-pointer group">
                    <div
                        className="p-2 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-lg shadow-lg shadow-violet-500/20"
                    >
                        <Scissors className="text-white" size={20} />
                    </div>
                    <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">SnipIt.</span>
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
                    <div
                        className="relative px-6 py-2.5 text-sm font-bold text-white bg-slate-800 rounded-full overflow-hidden group border border-white/10"
                    >
                        <span className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10">Sign Up</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar