"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <div className="relative w-full min-h-[calc(100vh-160px)] bg-zinc-950 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="text-center max-w-lg space-y-8 relative z-10 animate-fade-in">
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-red-950/30 border border-red-900/30 blur-md animate-pulse" />
          <div className="h-16 w-16 rounded-full bg-red-950/50 border border-red-500/50 text-red-500 flex items-center justify-center shadow-lg relative z-10">
            <AlertTriangle className="h-8 w-8" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block">
            Sistemsel Hata
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Bir Hata ile Karşılaştık
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
            Sayfayı yüklerken beklenmedik bir aksaklık oluştu. Lütfen sayfayı
            yenilemeyi veya tekrar denemeyi seçin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => reset()}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-xl shadow-red-950/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer"
          >
            <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
            TEKRAR DENE
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-500 backdrop-blur-xs px-8 py-4 text-sm font-bold tracking-wider text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Home className="h-4 w-4" />
            ANA SAYFAYA DÖN
          </Link>
        </div>
      </div>
    </div>
  );
}
