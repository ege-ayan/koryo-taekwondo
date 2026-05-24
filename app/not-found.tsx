"use client";

import Link from "next/link";
import { Compass, Home, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-[calc(100vh-160px)] bg-zinc-950 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Content */}
      <div className="text-center max-w-lg space-y-8 relative z-10 animate-fade-in">
        {/* Giant Glowing 404 Accent */}
        <div className="relative inline-flex items-center justify-center">
          <span className="text-[8rem] sm:text-[10rem] font-black tracking-tighter leading-none text-zinc-900 select-none">
            404
          </span>
          <span className="absolute text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400">
            KAYIP
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-red-500">
            <ShieldAlert className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">Sayfa Bulunamadı</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Antrenman Alanının Dışındasınız
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto">
            Görünüşe göre aradığınız sayfa silinmiş, adresi değişmiş veya antrenman minderinin dışına çıkmış olabilirsiniz.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-xl shadow-red-950/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Home className="h-4 w-4" />
            ANA SAYFAYA DÖN
          </Link>
          <Link
            href="/programlar"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-500 backdrop-blur-xs px-8 py-4 text-sm font-bold tracking-wider text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Compass className="h-4 w-4" />
            PROGRAMLARIMIZ
          </Link>
        </div>
      </div>
    </div>
  );
}
