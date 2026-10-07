"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Mail, Lock, User, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual registration logic here
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 px-6">
      <div className="pt-8 pb-6">
        <Link href="/" className="inline-flex p-2 -ml-2 text-slate-400 hover:text-slate-800 transition-colors rounded-full hover:bg-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center pb-20">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
          Create Account
        </h1>
        <p className="text-slate-500 font-medium mb-8">
          Join Track and take control of your finances.
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name" 
              className="w-full bg-white text-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium placeholder:text-slate-400 shadow-sm"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address" 
              className="w-full bg-white text-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium placeholder:text-slate-400 shadow-sm"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password" 
              className="w-full bg-white text-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium placeholder:text-slate-400 shadow-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98] mt-2"
          >
            Create Account <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 font-medium text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-600 font-bold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
