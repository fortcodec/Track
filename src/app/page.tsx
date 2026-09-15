"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { useEffect, useRef } from "react";

export default function Home() {
  const { messages, transcript, isListening } = useAppStore();
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, transcript]);

  return (
    <>
      {/* Dual Pockets Header */}
      <div className="px-5 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Overview</h1>
        
        <div className="flex gap-4">
          {/* Business Pocket */}
          <div className="flex-1 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[24px] p-5 text-white shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <p className="text-emerald-50 text-[13px] font-medium tracking-wide uppercase mb-1.5">Business Money</p>
            <h2 className="text-3xl font-extrabold tracking-tight">₦45,000</h2>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-100 bg-black/10 w-fit px-2.5 py-1 rounded-full backdrop-blur-sm shadow-inner">
              +₦3,000 today
            </div>
          </div>
          
          {/* Personal Pocket */}
          <div className="flex-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[24px] p-5 text-white shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            <p className="text-orange-50 text-[13px] font-medium tracking-wide uppercase mb-1.5">Personal Money</p>
            <h2 className="text-3xl font-extrabold tracking-tight">₦12,500</h2>
            <button className="mt-4 flex items-center gap-1 text-xs font-bold text-white bg-white/20 hover:bg-white/30 transition-colors w-fit px-2.5 py-1 rounded-full backdrop-blur-sm shadow-inner">
              Withdraw <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* AI Mentor Feed / Chat */}
      <div className="flex-1 px-5 py-2 flex flex-col gap-6 overflow-y-auto pb-8 scrollbar-hide">
        
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
              
              <div className="bg-white px-4 py-3.5 rounded-2xl rounded-tl-sm shadow-md shadow-slate-200/40 border border-slate-100 text-slate-700 text-[15px] leading-relaxed max-w-[80%]">
                {msg.id === '1' ? (
                  <>Good evening! You made <span className="font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">3,000 naira</span> profit today. I moved <span className="font-semibold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-md">1,000 naira</span> to your Personal Money for you to spend.</>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex items-end gap-2.5 justify-end animate-slide-up" style={{ animationDelay: `${Math.min(idx * 100, 300)}ms` }}>
              <div className="bg-emerald-600 px-4 py-3.5 rounded-2xl rounded-tr-sm shadow-lg shadow-emerald-600/20 text-white text-[15px] leading-relaxed max-w-[80%] font-medium">
                {msg.text}
              </div>
            </div>
          )
        ))}
        
        {/* Real-time transcript bubble */}
        {isListening && transcript && (
          <div className="flex items-end gap-2.5 justify-end animate-slide-up">
            <div className="bg-emerald-500/80 px-4 py-3.5 rounded-2xl rounded-tr-sm shadow-lg shadow-emerald-500/20 text-white text-[15px] leading-relaxed max-w-[80%] font-medium backdrop-blur-sm">
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

        <div ref={chatEndRef} className="h-1" />
      </div>
    </>
  );
}
