import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { History, Mic, Settings } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Track - AI Financial Tracker",
  description: "Voice-activated financial tracker for micro-business owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 h-screen flex justify-center text-slate-800 antialiased selection:bg-emerald-200`}>
        <div className="w-full max-w-md bg-slate-50 h-full shadow-2xl relative flex flex-col overflow-hidden">
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
            {children}
          </main>
          
          {/* Bottom Navigation */}
          <nav className="w-full bg-white/90 backdrop-blur-xl border-t border-slate-200/60 px-8 py-3 flex justify-between items-center z-50 relative pb-safe">
            <Link 
              href="/history" 
              className="p-3 text-slate-400 hover:text-emerald-600 transition-all rounded-2xl hover:bg-emerald-50 active:scale-95"
            >
              <History className="w-[26px] h-[26px]" />
            </Link>
            
            {/* Glowing FAB */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-7">
              <button className="bg-gradient-to-b from-emerald-400 to-teal-500 p-4 rounded-full text-white shadow-[0_8px_30px_rgba(16,185,129,0.5)] transition-all hover:scale-105 hover:shadow-[0_8px_40px_rgba(16,185,129,0.6)] active:scale-95 flex items-center justify-center border-4 border-slate-50">
                <Mic className="w-8 h-8 drop-shadow-sm" />
              </button>
            </div>

            <Link 
              href="/settings" 
              className="p-3 text-slate-400 hover:text-emerald-600 transition-all rounded-2xl hover:bg-emerald-50 active:scale-95"
            >
              <Settings className="w-[26px] h-[26px]" />
            </Link>
          </nav>

        </div>
      </body>
    </html>
  );
}
