import React from 'react'
import { Copy, BarChart, QrCode, CheckCircle } from 'lucide-react';
import Button from '../ui/Buttons';

const ShortenerReveal = ({ shortUrl, setIsCopied, isCopied }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div>
            {shortUrl && (
                <div
                    className="mt-10 w-150 z-20"
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
                                <a href={shortUrl} target='_blank' className="text-xl font-mono text-fuchsia-300 font-medium tracking-tight truncate mr-4">
                                    {shortUrl}
                                </a>

                                <Button
                                    size='sm'
                                    variant='success'
                                    onClick={handleCopy}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isCopied ? 'bg-green-500/20 text-green-400' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                >
                                    {isCopied ? <CheckCircle size={16} /> : <Copy size={16} />}
                                    {isCopied ? 'Copied!' : 'Copy'}
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-2">
                                <Button variant='none' className="py-2.5 rounded-lg bg-violet-500/10 text-violet-300 text-xs font-bold hover:bg-violet-500/20 transition-colors flex items-center justify-center gap-2">
                                    <QrCode size={14} /> Get QR Code
                                </Button>
                                <Button variant='none' className="py-2.5 rounded-lg bg-fuchsia-500/10 text-fuchsia-300 text-xs font-bold hover:bg-fuchsia-500/20 transition-colors flex items-center justify-center gap-2">
                                    <BarChart size={14} /> View Stats
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShortenerReveal