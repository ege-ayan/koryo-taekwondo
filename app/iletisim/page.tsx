"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  ChevronUp
} from "lucide-react";

interface OpeningHour {
  day: number;
  name: string;
  open: string;
  close: string;
  isWeekend?: boolean;
}

const openingHours: OpeningHour[] = [
  { day: 1, name: "Pazartesi", open: "16:00", close: "21:30" },
  { day: 2, name: "Salı", open: "16:00", close: "21:00" },
  { day: 3, name: "Çarşamba", open: "16:00", close: "21:30" },
  { day: 4, name: "Perşembe", open: "16:00", close: "21:00" },
  { day: 5, name: "Cuma", open: "16:00", close: "21:30" },
  { day: 6, name: "Cumartesi", open: "10:00", close: "21:00", isWeekend: true },
  { day: 0, name: "Pazar", open: "10:00", close: "17:30", isWeekend: true }
];

export default function IletisimPage() {
  const [mounted, setMounted] = useState(false);
  const [isOpenToday, setIsOpenToday] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);
  const [activeDay, setActiveDay] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkStatus = () => {
      // Get current UTC time
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      // Turkey is UTC+3
      const turkeyTime = new Date(utc + (3600000 * 3));
      
      const day = turkeyTime.getDay(); // 0-6 (0 is Sunday, 1 is Monday...)
      const hours = turkeyTime.getHours();
      const minutes = turkeyTime.getMinutes();
      
      setActiveDay(day);

      const todayHours = openingHours.find((h) => h.day === day);
      if (!todayHours) {
        setIsOpenToday(false);
        setStatusText("Bugün kapalıyız.");
        return;
      }

      const parseTime = (timeStr: string) => {
        const [h, m] = timeStr.split(":").map(Number);
        return h * 60 + m;
      };

      const currentMinutes = hours * 60 + minutes;
      const openMinutes = parseTime(todayHours.open);
      const closeMinutes = parseTime(todayHours.close);

      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        setIsOpenToday(true);
        setStatusText(`Şu An Açığız (Kapanış: ${todayHours.close})`);
      } else {
        setIsOpenToday(false);
        setStatusText(`Şu An Kapalıyız (Bugün: ${todayHours.open} - ${todayHours.close})`);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Recalculate every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-zinc-950 text-white min-h-screen">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-6 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-red-500 bg-red-950/30 border border-red-900/50 uppercase mb-4">
          İletişim Bilgilerimiz
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Bize <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-red-400">Ulaşın</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Daha da iyisi, gelin, yüz yüze görüşelim! Profesyonel taekwondo salonumuzda sizi ağırlamaktan ve şampiyon kadromuzla tanıştırmaktan mutluluk duyarız.
        </p>
      </section>

      {/* Grid Layout Section */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact info & Hours */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col space-y-6 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide border-b border-zinc-800/80 pb-4">
                Koryo Taekwondo Yaşamkent
              </h2>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 shadow-inner">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Salon Adresimiz
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                    Yaşamkent, 3207. Cd. No:95, 06810 <br /> Çankaya / Ankara
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 shadow-inner">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Telefon Numaramız
                  </h3>
                  <Link 
                    href="tel:+905326631013"
                    className="block text-lg sm:text-xl font-bold text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    +90 532 663 10 13
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 shadow-inner">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    E-Posta Adresi
                  </h3>
                  <Link 
                    href="mailto:info@koryotaekwondo.com"
                    className="block text-sm sm:text-base text-zinc-200 hover:text-white transition-colors duration-200 font-light"
                  >
                    info@koryotaekwondo.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Dynamic Working Hours Card */}
            <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-500" />
                  <h2 className="text-xl font-bold tracking-wide">
                    Çalışma Saatleri
                  </h2>
                </div>
                
                {/* Dynamically calculated status badge */}
                {mounted && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
                    isOpenToday 
                      ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/50" 
                      : "bg-zinc-900/80 text-zinc-400 border-zinc-800"
                  }`}>
                    <span className={`h-2.5 w-2.5 rounded-full ${
                      isOpenToday ? "bg-emerald-500 animate-pulse" : "bg-zinc-500"
                    }`} />
                    {isOpenToday ? "Şu An Açık" : "Şu An Kapalı"}
                  </span>
                )}
              </div>

              {/* Dynamic day hours status */}
              {mounted ? (
                <div className="mb-6 bg-zinc-950/40 border border-zinc-900 p-4 rounded-2xl flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                    {statusText}
                  </span>
                  <button 
                    onClick={() => setIsHoursExpanded(!isHoursExpanded)}
                    className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1 transition-colors duration-200"
                  >
                    {isHoursExpanded ? "Kapat" : "Tümünü Gör"}
                    {isHoursExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>
              ) : (
                <div className="h-14 bg-zinc-950/40 border border-zinc-900 rounded-2xl animate-pulse mb-6" />
              )}

              {/* Collapsible Hours List */}
              <div className={`transition-all duration-500 overflow-hidden ${
                isHoursExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              }`}>
                <div className="space-y-3.5 pb-2">
                  {openingHours.map((hour) => {
                    const isToday = activeDay === hour.day;
                    return (
                      <div 
                        key={hour.day}
                        className={`flex items-center justify-between text-sm py-2 px-3 rounded-xl border transition-colors ${
                          isToday 
                            ? "bg-red-950/10 border-red-900/40 text-red-400 font-semibold" 
                            : "bg-transparent border-transparent text-zinc-400"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {hour.name}
                          {isToday && <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-600 text-white leading-none scale-90">BUGÜN</span>}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-200">
                          <Clock className={`h-3.5 w-3.5 shrink-0 ${isToday ? "text-red-500" : "text-zinc-500"}`} />
                          <span>{hour.open} - {hour.close}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Embedded Google Map */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl flex-1 min-h-[400px] lg:min-h-full flex flex-col group">
              {/* Soft Red Accent Shadow around map */}
              <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-br from-red-600/10 to-red-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* The Iframe */}
              <iframe
                src="https://maps.google.com/maps?q=Koryo%20Taekwondo%20Ya%C5%9Famkent%20Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px", flexGrow: 1 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[0.88] contrast-[1.05] grayscale-10 group-hover:brightness-[0.98] transition-all duration-500"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
