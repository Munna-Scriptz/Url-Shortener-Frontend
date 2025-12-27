import React, { useState } from 'react';
import { ExternalLink, History } from 'lucide-react';
import RevealHistory from '../components/dashboard/RevealHistory';

const Dashboard = () => {
  const [showHistory, setShowHistory] = useState(false);
  
  return (
    <>
      <section id='content'>
        <div className="container">
          <div id="content-Row" className="min-h-screen text-white relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-125 h-125 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
              <header className="mb-12 flex justify-between items-end">
                <div>
                  <h1 className="text-4xl font-black tracking-tighter">Your <span className="text-Secondary">Analytics.</span></h1>
                  <p className="text-slate-500 font-medium">Monitoring the pulse of your links.</p>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-2xl font-mono font-bold text-brand">1,284</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-600 font-black">Total Global Clicks</div>
                </div>
              </header>

              {/* --- MAIN DASHBOARD TABLE (The "Live" Link) --- */}
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
                    <tbody className="divide-y divide-white/5">
                      <tr className="group hover:bg-white/2 transition-colors">
                        <td className="px-8 py-6 max-w-xs">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold truncate text-slate-300">https://github.com/ShadowMunna/very-long-repository-name-for-testing</span>
                            <span className="text-[10px] text-slate-600 font-mono mt-1 italic">Added 2 hours ago</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2 group/link cursor-pointer">
                            <span className="text-lg font-black text-Secondary tracking-tight">snip.it/rX2b9</span>
                            <ExternalLink size={14} className="text-slate-600 group-hover/link:text-white transition-colors" />
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <span className="text-xl font-black text-white">482</span>
                              <div className="w-16 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                                <div className="w-[70%] h-full bg-linear-to-r from-brand to-Secondary" />
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
                  </table>
                </div>

                {/* --- EXPANDABLE HISTORY SECTION --- */}
                <RevealHistory showHistory={showHistory} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;