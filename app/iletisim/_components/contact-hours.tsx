"use client";

import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import { openingHours } from "./opening-hours-data";

interface ContactHoursProps {
  isOpenToday: boolean;
  statusText: string;
  activeDay: number;
}

export default function ContactHours({
  isOpenToday,
  statusText,
  activeDay,
}: ContactHoursProps) {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);

  return (
    <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-red-500" />
          <h2 className="text-xl font-bold tracking-wide">
            Çalışma Saatleri
          </h2>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
            isOpenToday
              ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/50"
              : "bg-zinc-900/80 text-zinc-400 border-zinc-800"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isOpenToday
                ? "bg-emerald-500 animate-pulse"
                : "bg-zinc-500"
            }`}
          />
          {isOpenToday ? "Şu An Açık" : "Şu An Kapalı"}
        </span>
      </div>

      <div className="mb-6 bg-zinc-950/40 border border-zinc-900 p-4 rounded-2xl flex items-center justify-between">
        <span className="text-xs sm:text-sm text-zinc-400 font-medium">
          {statusText}
        </span>
        <button
          onClick={() => setIsHoursExpanded(!isHoursExpanded)}
          className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1 transition-colors duration-200"
        >
          {isHoursExpanded ? "Kapat" : "Tümünü Gör"}
          {isHoursExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isHoursExpanded
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
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
                  {isToday && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-600 text-white leading-none scale-90">
                      BUGÜN
                    </span>
                  )}
                </span>
                <div className="flex items-center gap-1.5 text-zinc-200">
                  <Clock
                    className={`h-3.5 w-3.5 shrink-0 ${isToday ? "text-red-500" : "text-zinc-500"}`}
                  />
                  <span>
                    {hour.open} - {hour.close}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
