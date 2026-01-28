import React, { useState } from 'react'
import { ExternalLink, History, Globe, CornerDownRight } from 'lucide-react';
import { Link } from 'react-router'
import RevealHistory from './RevealHistory';
import { TimeAgo } from '../../utils/Services';

const SingleLinkCard = ({ item }) => {
    const [showHistory, setShowHistory] = useState(false);

    const currenTime = TimeAgo(item)
    
    return (
        <div className={`group relative bg-primarySurface/30 border border-white/5 rounded-2xl overflow-hidden duration-300 hover:bg-primarySurface/50 ${showHistory ? 'ring-1 ring-brand/50 bg-primarySurface/60' : ''}`}>

            {/* The Main "Row" */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 items-center">

                {/* 1. Long URL Section */}
                <div className="md:col-span-5 flex items-start gap-4 overflow-hidden">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-brand/30 transition-colors">
                        <Globe size={18} className="text-slate-400 group-hover:text-brand transition-colors" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <h4 className="text-sm font-bold text-slate-200 truncate pr-4">{item.longUrl}</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Active • {currenTime}</span>
                        </div>
                    </div>
                </div>

                {/* 2. Short URL Section */}
                <div className="md:col-span-3">
                    <label className="md:hidden text-[10px] uppercase font-bold text-slate-600 mb-1 block">Short Link</label>
                    <Link
                        to={`http://localhost:8000/${item.shortUrl}`}
                        target='_blank'
                        className="flex items-center gap-2 group/link w-fit px-3 py-1.5 rounded-lg bg-brand/10 border border-brand/10 hover:border-brand/30 transition-all"
                    >
                        <span className="text-sm font-mono font-bold text-Secondary tracking-tight">localhost:8000/{item.shortUrl}</span>
                        <ExternalLink size={12} className="text-brand opacity-50 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                </div>

                {/* 3. Stats Section (Span 2) */}
                <div className="md:col-span-2">
                    <label className="md:hidden text-[10px] uppercase font-bold text-slate-600 mb-1 block">Traffic</label>
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-black text-white">{item.visitHistory.length}</span>
                        <div className="flex flex-col gap-0.5 w-16">
                            <div className="flex items-end gap-0.5 h-4">
                                <div className="w-1 bg-slate-700 h-[30%] rounded-t-sm"></div>
                                <div className="w-1 bg-slate-700 h-[60%] rounded-t-sm"></div>
                                <div className="w-1 bg-brand h-full rounded-t-sm"></div>
                                <div className="w-1 bg-slate-700 h-[40%] rounded-t-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Action Button (Span 2) */}
                <div className="md:col-span-2 flex justify-end">
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-all overflow-hidden ${showHistory
                            ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                            : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                            }`}
                    >
                        {showHistory ? (
                            <>Close <CornerDownRight size={14} /></>
                        ) : (
                            <>History <History size={14} /></>
                        )}
                    </button>
                </div>
            </div>

            {/* EXPANDABLE SECTION */}
            <div className={`border-t border-white/5 bg-black/20 ${showHistory ? 'content-expanded' : 'content-collapsed'}`}>
                <div>
                    <RevealHistory item={item.visitHistory} showHistory={showHistory} createdAt={item.createdAt} />
                </div>
            </div>
        </div>
    )
}

export default SingleLinkCard