import React from "react";
import { BottomNav } from "@/components/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-200 min-h-[100dvh] flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-slate-50 h-[100dvh] shadow-2xl relative flex flex-col overflow-hidden">
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </main>
        
        <BottomNav />
        
      </div>
    </div>
  );
}
