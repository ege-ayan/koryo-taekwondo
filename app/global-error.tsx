"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the global error
    console.error("Critical root error caught:", error);
  }, [error]);

  return (
    <html lang="tr" className="h-full">
      <head>
        <title>Kritik Hata - Koryo Taekwondo</title>
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white antialiased items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        {/* Main Content */}
        <div className="text-center max-w-lg space-y-8 relative z-10">
          {/* Pulsing Alert Warning Icon */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute -inset-4 rounded-full bg-red-950/30 border border-red-900/30 blur-md animate-pulse" />
            <div className="h-16 w-16 rounded-full bg-red-950/50 border border-red-500/50 text-red-500 flex items-center justify-center shadow-lg relative z-10">
              <AlertTriangle className="h-8 w-8" />
            </div>
          </div>

          {/* Text Details */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 block">
              Kritik Sistem Hatası
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sistem Genelinde Bir Aksaklık Oluştu
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
              Uygulama çalıştırılırken kritik bir hata meydana geldi. Tekrar dene butonuna tıklayarak uygulamayı kurtarmayı deneyebilirsiniz.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex items-center justify-center pt-4">
            <button
              onClick={() => reset()}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 px-10 py-4.5 text-sm font-bold tracking-wider text-white shadow-xl shadow-red-950/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
              SİSTEMİ YENİDEN BAŞLAT
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
