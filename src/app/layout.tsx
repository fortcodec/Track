import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";

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
          
          <BottomNav />

        </div>
      </body>
    </html>
  );
}
