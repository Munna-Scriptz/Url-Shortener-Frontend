import React, { useState } from 'react'
import { ExternalLink, History } from 'lucide-react';
import RevealHistory from './RevealHistory';
import { Link } from 'react-router';

const DashTable = ({ links }) => {
    const [showHistory, setShowHistory] = useState(false);
    console.log(links)
    
    return (
        <>
            <div className="bg-primarySurface/40 border border-white/5 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/2">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Destination (Long URL)</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Short Link</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Total Visits</th>
                                <th className="px-8 py-5 text-right"></th>
                            </tr>
                        </thead>
                        {
                            links?.map((item, i) => (
                                <>
                                    <tbody key={i} className="divide-y divide-white/5">
                                        <tr className="group hover:bg-white/2 transition-colors">
                                            <td className="px-8 py-6 max-w-xs">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold truncate text-slate-300">{item.longUrl}</span>
                                                    <span className="text-[10px] text-slate-600 font-mono mt-1 italic">Added 2 hours ago</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <Link to={`http://localhost:8000/${item.shortUrl}`} target='_blank' className="flex items-center gap-2 group/link cursor-pointer">
                                                    <span className="text-lg font-black text-Secondary tracking-tight">localhost:8000/{item.shortUrl}</span>
                                                    <ExternalLink size={14} className="text-slate-600 group-hover/link:text-white transition-colors" />
                                                </Link>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col">
                                                        <span className="text-xl font-black text-white">{item.visitHistory.length}</span>
                                                        <div className="w-16 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                                                            <div className={`w-[70%] h-full bg-linear-to-r from-brand to-Secondary`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button
                                                    onClick={() => setShowHistory(!showHistory)}
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border cursor-pointer border-white/10 hover:bg-white hover:text-black transition-all font-bold text-xs"
                                                >
                                                    <History size={14} /> {showHistory ? 'Hide Details' : 'View History'}
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </>
                            ))
                        }
                    </table>
                </div>

                {/* --- EXPANDABLE HISTORY SECTION --- */}
                <RevealHistory showHistory={showHistory} />
            </div>
        </>
    )
}

export default DashTable