import React from 'react';
import SingleLinkCard from './SingleLinkCard';

const DashTable = ({ links }) => {
    return (
        <div className="space-y-6 w-full max-w-6xl mx-auto">
            {/* Optional Header Row for Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-6 px-6 pb-2 border-b border-white/5">
                <div className="col-span-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Target Destination</div>
                <div className="col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Short Link</div>
                <div className="col-span-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Total Visits</div>
                <div className="col-span-2 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Actions</div>
            </div>

            {/* Render the Cards */}
            <div className="flex flex-col gap-4">
                {links?.map((item, i) => (
                    <SingleLinkCard key={i} item={item} />
                ))}
            </div>
        </div>
    )
}

export default DashTable;