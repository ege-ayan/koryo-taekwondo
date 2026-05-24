import React from "react";
import Image from "next/image";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  slogan: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  scheduleTitle: string;
  schedules: {
    days: string;
    hours: string;
    isWeekend?: boolean;
  }[];
  highlights: string[];
}

interface ProgramCardProps {
  program: Program;
  index: number;
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2 relative group flex flex-col justify-stretch">
        <div className="absolute -inset-1.5 bg-linear-to-r from-red-600 to-red-950 rounded-4xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 -z-10" />
        <div className="relative aspect-4/3 lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[350px] lg:min-h-0 rounded-4xl overflow-hidden border border-zinc-800 bg-zinc-900 flex-1">
          <Image
            src={program.image}
            alt={program.title}
            fill
            priority={index < 2}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 px-4 py-2 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-white font-bold tracking-wider text-xs sm:text-sm shadow-xl">
            {program.ageGroup}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-red-950/40 text-red-500 border border-red-900/30 mb-6 shadow-inner">
          {program.icon}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white mb-2">
          {program.title}
        </h2>
        <p className="text-base sm:text-lg font-medium text-red-400 mb-4 tracking-wide leading-relaxed">
          {program.slogan}
        </p>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
          {program.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {program.highlights.map((highlight, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0" />
              <span className="font-light">{highlight}</span>
            </div>
          ))}
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-5 sm:p-6 shadow-lg shadow-black/10">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Calendar className="h-5 w-5 text-red-500" />
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider">
              {program.scheduleTitle}
            </h3>
          </div>
          <div className="space-y-4">
            {program.schedules.map((sched, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 last:pb-0 border-b border-zinc-800/50 last:border-0"
              >
                <span className="text-xs sm:text-sm font-semibold text-zinc-400">
                  {sched.days}
                </span>
                <div className="flex items-center gap-1.5 text-zinc-200">
                  <Clock className="h-3.5 w-3.5 text-red-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    {sched.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
