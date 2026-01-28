import React from 'react'
import { MousePointer2, Globe, Calendar } from 'lucide-react';

const RevealHistory = ({ showHistory, item, createdAt }) => {

    return (
        <>
            {showHistory && (
                <div className="bg-black/40 border-t border-white/5 animate-reveal p-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stats Cards inside History */}
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                            <div className="flex justify-between items-start">
                                <Globe className="text-brand" size={20} />
                                <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded">LIVE</span>
                            </div>
                            <div className="text-2xl font-black">USA, BD, UK</div>
                            <div className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">Top Traffic Sources</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                            <MousePointer2 className="text-Secondary" size={20} />
                            <div className="text-2xl font-black">Mobile (82%)</div>
                            <div className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">Primary Device</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                            <Calendar className="text-indigo-400" size={20} />
                            <div className="text-2xl font-black">{new Date(createdAt).toLocaleString()}</div>
                            <div className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">Url Created</div>
                        </div>
                    </div>

                    {/* Mini Mini Table for timeline */}
                    <div className="mt-8">
                        <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.3em] mb-4 ml-1">Recent Visit Log</h4>
                        <div className="space-y-2">
                            {item.map((item , i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/2 rounded-lg border border-white/2 text-xs">
                                    <span className="text-slate-400 font-mono">192.168.1.xxx</span>
                                    <span className="text-slate-500 italic">Dhaka, Bangladesh</span>
                                    <span className="text-brand font-bold">{new Date(item.visitTime).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RevealHistory