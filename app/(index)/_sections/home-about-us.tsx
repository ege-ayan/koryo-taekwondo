"use client";

import React from "react";
import Image from "next/image";
import { FaTrophy, FaCompass, FaYinYang } from "react-icons/fa6";

interface AboutCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const aboutCards: AboutCard[] = [
  {
    title: "Kulübümüzün Tarihçesi",
    description:
      "Koryo Taekwondo Yaşamkent Spor Kulübü, 1990'ların sonunda Erkan Ercan'ın liderliğinde kuruldu. O günden bu yana taekwondo sporuna olan tutku ve disiplinle yüzlerce sporcu yetiştirdik. Kulübümüz, taekwondoyu sadece bir spor değil, bir yaşam biçimi olarak benimsemekte ve ulusal ile uluslararası başarılara imza atmaktadır.",
    icon: <FaTrophy className="h-6 w-6" />,
  },
  {
    title: "Vizyon ve Misyonumuz",
    description:
      "Koryo Taekwondo olarak amacımız, taekwondo sporunu her yaştan bireye ulaşılır kılmak, disiplinli ve özgüvenli bireyler yetiştirmektir. Fiziksel ve zihinsel gelişimi birleştirerek, ulusal ve uluslararası başarılar elde eden güçlü bir taekwondo camiası oluşturmayı hedefliyoruz.",
    icon: <FaCompass className="h-6 w-6" />,
  },
  {
    title: "Taekwondo Felsefesi",
    description:
      "Taekwondo, Kore kökenli bir dövüş ve savunma sanatıdır. Fiziksel tekniklerin yanı sıra disiplin, özsaygı ve özgüven gibi değerleri de öğreten bu spor, hem bedeni hem de zihni güçlendirmeyi amaçlar. Temel teknikler arasında hız, tekme, bloklar, formlar (poomsae) ve düşüş teknikleri yer alır.",
    icon: <FaYinYang className="h-6 w-6" />,
  },
];

export default function HomeAboutUs() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 lg:py-32">
      {/* Decorative background glow circles */}
      <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Content */}
          <div className="space-y-10 lg:col-span-7">
            {/* Headers */}
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase block">
                GÜÇ • DİSİPLİN • SAYGI
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
                Hakkımızda
              </h2>
              <div className="h-[3px] w-20 bg-red-600 rounded-full" />
            </div>

            {/* Info Cards Grid */}
            <div className="space-y-6">
              {aboutCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative flex gap-5 rounded-2xl border border-zinc-900 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-950/50 hover:bg-zinc-900/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-red-900/30 group-hover:bg-red-950/10 transition-all duration-300">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-red-400">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Image layout */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end lg:self-stretch">
            <div className="relative w-full max-w-[480px] h-full min-h-[400px] lg:min-h-full group">
              {/* Glowing background red accent */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-red-600/30 to-red-950/0 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-80" />

              {/* Main Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                <Image
                  src="/images/home/about.webp"
                  alt="Koryo Taekwondo Hakkımızda Sporcularımız"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 480px, 480px"
                />

                {/* Subtle internal overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />

                {/* Bottom caption card inside the image (glassmorphism overlay) */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <span className="block text-xs font-semibold tracking-wider text-red-400 uppercase">
                    Koryo Ailesi
                  </span>
                  <span className="block text-base font-bold text-white mt-1">
                    Disiplin &amp; Kardeşlik
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
