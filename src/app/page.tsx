import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Dual Pockets Header */}
      <div className="px-5 pt-8 pb-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Overview</h1>
        
        <div className="flex gap-4">
          {/* Business Pocket */}
          <div className="flex-1 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[24px] p-5 text-white shadow-xl shadow-emerald-600/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <p className="text-emerald-100/90 text-[13px] font-medium tracking-wide uppercase mb-1.5">Business Money</p>
            <h2 className="text-2xl font-bold tracking-tight">₦45,000</h2>
            <div className="mt-4 flex items-center text-xs font-medium text-emerald-100 bg-black/10 w-fit px-2.5 py-1 rounded-full backdrop-blur-sm">
              +₦3,000 today
            </div>
          </div>
          
          {/* Personal Pocket */}
          <div className="flex-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[24px] p-5 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            <p className="text-orange-100/90 text-[13px] font-medium tracking-wide uppercase mb-1.5">Personal Money</p>
            <h2 className="text-2xl font-bold tracking-tight">₦12,500</h2>
            <button className="mt-4 flex items-center gap-1 text-xs font-bold text-white bg-white/20 hover:bg-white/30 transition-colors w-fit px-2.5 py-1 rounded-full backdrop-blur-sm">
              Withdraw <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* AI Mentor Feed / Chat */}
      <div className="flex-1 px-5 py-2 flex flex-col gap-5 overflow-y-auto pb-6">
        
        {/* Time Divider */}
        <div className="flex items-center justify-center my-2">
          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase bg-slate-100/50 px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* AI Chat Bubble */}
        <div className="flex items-end gap-2.5 animate-in slide-in-from-bottom-2 fade-in duration-500">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-50">
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="bg-white px-4 py-3.5 rounded-2xl rounded-bl-sm shadow-sm border border-slate-100 text-slate-700 text-[15px] leading-relaxed max-w-[85%] relative">
            Good evening! You made <span className="font-semibold text-emerald-600 bg-emerald-50 px-1 rounded">3,000 naira</span> profit today. I moved <span className="font-semibold text-orange-600 bg-orange-50 px-1 rounded">1,000 naira</span> to your Personal Money for you to spend.
          </div>
        </div>

        {/* User Message Bubble */}
        <div className="flex items-end gap-2.5 justify-end animate-in slide-in-from-bottom-2 fade-in duration-500 delay-150 fill-mode-both">
          <div className="bg-emerald-600 px-4 py-3 rounded-2xl rounded-br-sm shadow-md shadow-emerald-600/10 text-white text-[15px] leading-relaxed max-w-[80%]">
            I just paid 500 for transport.
          </div>
        </div>
        
        {/* AI Typing Indicator (Optional Polish) */}
        <div className="flex items-end gap-2.5 opacity-60">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-50">
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="bg-white px-4 py-4 rounded-2xl rounded-bl-sm shadow-sm border border-slate-100 flex gap-1">
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
        
      </div>
    </>
  );
}
