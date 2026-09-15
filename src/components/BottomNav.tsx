"use client";

import Link from "next/link";
import { History, Mic, Settings } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { useEffect, useState, useCallback } from "react";

export function BottomNav() {
  const { isListening, setIsListening, setTranscript, addMessage } = useAppStore();
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = true;
        rec.interimResults = true;
        
        let finalTranscript = "";

        rec.onresult = (event: any) => {
          let interimTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }
          setTranscript(finalTranscript + interimTranscript);
        };

        rec.onend = () => {
          setIsListening(false);
          setTranscript((current) => {
            if (current.trim()) {
              addMessage({ id: Date.now().toString(), sender: 'user', text: current.trim() });
            }
            return '';
          });
          finalTranscript = "";
        };

        setRecognition(rec);
      }
    }
  }, [setIsListening, setTranscript, addMessage]);

  const toggleListen = useCallback(() => {
    if (!recognition) {
      alert("Voice recognition is not supported in this browser. Try Chrome, Safari, or Edge.");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      setTranscript('');
      try {
        recognition.start();
        setIsListening(true);
      } catch (e) {
        console.error("Speech recognition error:", e);
      }
    }
  }, [isListening, recognition, setTranscript, setIsListening]);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-xl border-t border-slate-200/60 px-8 py-3 flex justify-between items-center z-50 relative pb-safe">
      <Link 
        href="/history" 
        className="p-3 text-slate-400 hover:text-emerald-600 transition-all rounded-2xl hover:bg-emerald-50 active:scale-95"
      >
        <History className="w-[26px] h-[26px]" />
      </Link>
      
      {/* Glowing FAB */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-7 z-50">
        <button 
          onClick={toggleListen}
          className={`p-4 rounded-full text-white transition-all duration-300 flex items-center justify-center border-[3px] border-slate-50 active:scale-95 ${
            isListening 
              ? 'bg-gradient-to-b from-red-500 to-rose-600 shadow-[0_8px_30px_rgba(239,68,68,0.6)] animate-pulse scale-105' 
              : 'bg-gradient-to-b from-emerald-400 to-teal-500 shadow-[0_8px_30px_rgba(16,185,129,0.5)] animate-breathe'
          }`}
        >
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
  );
}
