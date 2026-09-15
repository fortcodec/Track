"use client";

import { Sparkles } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { messages, transcript, isListening } = useAppStore();
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<{name: string} | null>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, transcript]);

  return (
    <>
      {/* Dual Pockets Header */}
      <div className="px-5 pt-8 pb-4 z-10 bg-slate-50 shrink-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Overview</h1>
          <button 
            onClick={() => setUser(user ? null : { name: 'Fortune' })}
            className="text-[11px] font-bold tracking-wider uppercase bg-slate-200 text-slate-500 px-3 py-1.5 rounded-full hover:bg-slate-300 transition-colors"
          >
            {user ? 'Logout' : 'Simulate Login'}
          </button>
        </div>
        
        <div className="flex gap-4">
          {/* Business Pocket */}
          <div className="flex-1 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[24px] p-5 text-white shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div>
              <p className="text-emerald-50 text-[13px] font-medium tracking-wide uppercase mb-1">Business Money</p>
              <h2 className="text-3xl font-extrabold tracking-tight">₦45,000</h2>
            </div>
            <div className="mt-4 flex items-center text-[11px] font-bold tracking-wider uppercase text-emerald-100 bg-black/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm shadow-inner">
              Capital & float
            </div>
          </div>
          
          {/* Personal Pocket */}
          <div className="flex-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[24px] p-5 text-white shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            <div>
              <p className="text-orange-50 text-[13px] font-medium tracking-wide uppercase mb-1">Personal Money</p>
              <h2 className="text-3xl font-extrabold tracking-tight">₦12,500</h2>
            </div>
            <div className="mt-4 flex items-center text-[11px] font-bold tracking-wider uppercase text-orange-50 bg-white/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm shadow-inner">
              Safe to spend
            </div>
          </div>
        </div>
      </div>

      {/* AI Mentor Feed / Chat */}
      <div className="flex-1 px-5 py-4 flex flex-col gap-6 overflow-y-auto pb-8 scrollbar-hide">
        
        {/* Time Divider */}
        <div className="flex items-center justify-center my-2">
          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase bg-slate-100/50 px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* Dynamic Chat Messages */}
        {messages.map((msg, idx) => (
          msg.sender === 'ai' ? (
            <div key={msg.id} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${Math.min(idx * 150, 450)}ms` }}>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-sm border border-white flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100/80 px-1.5 py-0.5 rounded shadow-sm">Mentor</span>
              </div>
              
              <div className="bg-white px-4 py-3.5 rounded-2xl rounded-tl-sm shadow-md shadow-slate-200/40 border border-slate-100 text-slate-700 text-[15px] leading-relaxed w-full font-medium">
                {msg.id === '1' ? (
                  user ? `Hey ${user.name}!! I'm Track.` : "Hey there!! I'm Track."
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex items-end gap-2.5 justify-end animate-slide-up" style={{ animationDelay: `${Math.min(idx * 100, 300)}ms` }}>
              <div className="bg-emerald-600 px-4 py-3.5 rounded-2xl rounded-tr-sm shadow-lg shadow-emerald-600/20 text-white text-[15px] leading-relaxed max-w-[85%] font-medium">
                {msg.text}
              </div>
            </div>
          )
        ))}
        
        {/* Real-time transcript bubble */}
        {isListening && transcript && (
          <div className="flex items-end gap-2.5 justify-end animate-slide-up">
            <div className="bg-emerald-500/80 px-4 py-3.5 rounded-2xl rounded-tr-sm shadow-lg shadow-emerald-500/20 text-white text-[15px] leading-relaxed max-w-[85%] font-medium backdrop-blur-sm">
              <span className="opacity-90">{transcript}</span>
            </div>
          </div>
        )}

        {/* AI Typing Indicator (when listening but no transcript yet) */}
        {isListening && !transcript && (
          <div className="flex items-end gap-2.5 justify-end animate-slide-up opacity-70">
            <div className="bg-emerald-500/50 px-4 py-4 rounded-2xl rounded-tr-sm flex gap-1 items-center h-[46px] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} className="h-2" />
      </div>
    </>
  );
}
