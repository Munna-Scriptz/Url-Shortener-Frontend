import React from 'react'

const DashHeader = ({ totalClicks }) => {
    const totalClickCount = totalClicks?.reduce((sum, no) => sum + no.visitHistory.length ,0);

    return (
        <header className="mb-12 flex justify-between items-end">
            <div>
                <h1 className="text-4xl font-black tracking-tighter">Your <span className="text-Secondary">Analytics.</span></h1>
                <p className="text-slate-500 font-medium">Monitoring the pulse of your links.</p>
            </div>
            <div className="hidden md:block text-right">
                <div className="text-2xl font-mono font-bold text-brand">{totalClickCount || 0}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-600 font-black">Total Global Clicks</div>
            </div>
        </header>
    )
}

export default DashHeader