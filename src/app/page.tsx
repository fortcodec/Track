import Link from 'next/link';
import { Sparkles, ArrowRight, Mic } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">Track.</span>
        </div>
        <Link 
          href="/login" 
          className="text-[13px] font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider"
        >
          Log In
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center -mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Meet your new money mentor
        </div>
        
        <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6 max-w-sm mx-auto">
          Your Voice-Activated AI Financial Mentor
        </h1>
        
        <p className="text-slate-500 font-medium leading-relaxed mb-10 max-w-[320px] mx-auto text-[15px]">
          Seamlessly manage your business and personal cash. Just tell Track what you spent, and watch your finances organize themselves.
        </p>

        <div className="w-full max-w-sm flex flex-col gap-3">
          <Link 
            href="/register" 
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98]"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/login" 
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl py-4 font-bold text-[15px] border border-slate-200 shadow-sm transition-all active:scale-[0.98]"
          >
            Log In to Existing Account
          </Link>
        </div>
      </main>
      
      {/* Footer Decoration */}
      <div className="h-32 bg-gradient-to-t from-emerald-100/50 to-transparent absolute bottom-0 w-full pointer-events-none -z-10" />
    </div>
  );
}
