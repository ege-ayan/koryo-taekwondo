"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Flame,
  Shield,
  Heart,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users,
} from "lucide-react";

interface Program {
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

const programs: Program[] = [
  {
    id: "minikler",
    title: "MİNİKLER GRUBU",
    ageGroup: "5-11 YAŞ",
    slogan: "Minik şampiyonlar burada yetişiyor!",
    description:
      "5-11 yaş grubu için özel olarak hazırlanan taekwondo derslerimizde çocuklarınız hem fiziksel olarak güçlenecek, koordinasyon yeteneklerini geliştirecek hem de disiplin ve yüksek özgüven kazanacak!",
    image: "/images/programs/children-program.webp",
    icon: <Sparkles className="h-6 w-6" />,
    scheduleTitle: "Program Seçeneklerimiz",
    schedules: [
      {
        days: "Hafta içi dersleri:",
        hours: "Pazartesi - Çarşamba - Cuma, 18:30 - 19:30",
      },
      {
        days: "Hafta sonu dersleri:",
        hours: "Cumartesi - Pazar, 11:00 - 12:00 veya 14:00 - 15:00",
        isWeekend: true,
      },
    ],
    highlights: [
      "Motor becerileri & koordinasyon",
      "Disiplin & odaklanma",
      "Akran etkileşimi & sosyalleşme",
      "Temel taekwondo teknikleri",
    ],
  },
  {
    id: "gencler",
    title: "GENÇLER GRUBU",
    ageGroup: "12-17 YAŞ",
    slogan: "Gençler sahaya!",
    description:
      "12-17 yaş arasındaki gençlere özel hazırlanan programımızda, disiplin ve özgüven odaklı taekwondo derslerimizle hem güçlü adımlar hem de büyük başarılar için buradayız!",
    image: "/images/programs/young-program.webp",
    icon: <Flame className="h-6 w-6" />,
    scheduleTitle: "Ders Günlerimiz",
    schedules: [
      {
        days: "Hafta içi & Sonu Karma:",
        hours: "Salı - Perşembe - Cumartesi, 19:00 - 22:00",
      },
    ],
    highlights: [
      "Kondisyon & esneklik artışı",
      "Öz savunma (Self-defense) becerileri",
      "Zihinsel dayanıklılık & stres yönetimi",
      "Liderlik ve sorumluluk bilinci",
    ],
  },
  {
    id: "yetiskinler",
    title: "YETİŞKİN GRUBU",
    ageGroup: "YETİŞKİN GRUBU",
    slogan: "Taekwondo ile tanışın, kendinize meydan okuyun!",
    description:
      "Yetişkinlere özel derslerimizle hem fiziksel hem de zihinsel gücünüzü yeniden keşfedin. Günlük stresinizden arınırken harika bir kardiyo ve güç antrenmanı yapın.",
    image: "/images/programs/adults-program.webp",
    icon: <Shield className="h-6 w-6" />,
    scheduleTitle: "Ders Günlerimiz",
    schedules: [
      {
        days: "Hafta içi dersleri:",
        hours: "Pazartesi - Çarşamba - Cuma, 20:00 - 21:00",
      },
    ],
    highlights: [
      "Tam vücut kondisyonu & kardiyo",
      "İleri taekwondo teknikleri & poomsae",
      "Zihinsel odaklanma & meditasyon",
      "Esneklik, denge ve refleks gelişimi",
    ],
  },
  {
    id: "kadinlar",
    title: "KADINLAR GRUBU",
    ageGroup: "KADINLAR GRUBU",
    slogan: "Kendiniz için bir saat ayırın, güçlenmenin tadını çıkarın!",
    description:
      "Kadınlara özel taekwondo derslerimizle sporun, özgüvenin ve dayanıklılığın keyfini çıkarın. Güvenli ve destekleyici bir ortamda, kendinizi savunmayı öğrenirken formda kalın.",
    image: "/images/programs/women-program.webp",
    icon: <Heart className="h-6 w-6" />,
    scheduleTitle: "Ders Günlerimiz",
    schedules: [
      {
        days: "Hafta sonu dersleri:",
        hours: "Cumartesi ve Pazar, 09:00 - 10:00",
        isWeekend: true,
      },
    ],
    highlights: [
      "Kişisel savunma (Self-defense)",
      "Sıkılaşma & kalori yakımı antrenmanları",
      "Özgüven ve içsel güç gelişimi",
      "Keyifli ve motivasyon dolu grup enerjisi",
    ],
  },
];

export default function ProgramlarPage() {
  return (
    <div className="relative w-full bg-zinc-950 text-white min-h-screen">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hero / Header Section */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-red-500 bg-red-950/30 border border-red-900/50 uppercase mb-4 animate-fade-in">
          <Trophy className="h-3.5 w-3.5" /> Programlarımız
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Eğitim{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-red-400">
            Programlarımız
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Türkiye ve Avrupa Şampiyonu Erkan Ercan liderliğinde, her yaş grubuna
          ve seviyeye uygun olarak hazırlanmış özel programlarımızla
          potansiyelinizi ortaya çıkarın.
        </p>
      </section>

      {/* Programs List Section */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="space-y-24 sm:space-y-32">
          {programs.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={program.id}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Area */}
                <div className="w-full lg:w-1/2 relative group">
                  {/* Glowing Outline Decoration on Hover */}
                  <div className="absolute -inset-1.5 bg-linear-to-r from-red-600 to-red-950 rounded-4xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 -z-10" />

                  {/* Main Image Container */}
                  <div className="relative aspect-4/3 rounded-4xl overflow-hidden border border-zinc-800 bg-zinc-900">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      priority={index < 2}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />

                    {/* Age Group Overlay Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-white font-bold tracking-wider text-xs sm:text-sm shadow-xl">
                      {program.ageGroup}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  {/* Category Icon Badge */}
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-red-950/40 text-red-500 border border-red-900/30 mb-6 shadow-inner">
                    {program.icon}
                  </div>

                  {/* Title & Slogan */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white mb-2">
                    {program.title}
                  </h2>
                  <p className="text-base sm:text-lg font-medium text-red-400 mb-4 tracking-wide leading-relaxed">
                    {program.slogan}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights Grid */}
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

                  {/* Schedule Card */}
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
          })}
        </div>
      </section>

      {/* Free Trial Banner / CTA Section */}
      <section className="relative px-6 pb-24 max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-linear-to-b from-zinc-900/60 to-zinc-950/80 p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-950/20 rounded-full blur-[100px] pointer-events-none -z-10" />

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/50 border border-red-900/50 mb-6">
            <Users className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> Aramıza Katılın
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            İlk Dersiniz Bizden <br className="sm:hidden" />{" "}
            <span className="text-red-500">Ücretsiz!</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed mb-8">
            Derslerimizi yakından görmek, salonumuzu gezmek ve şampiyon
            kadromuzla tanışmak için hemen ücretsiz bir deneme dersi randevusu
            oluşturun.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 px-8 py-4 text-sm sm:text-base font-bold tracking-wider text-white shadow-xl shadow-red-900/20 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              ÜCRETSİZ RANDEVU AL
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ekibimiz"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-500 backdrop-blur-xs px-8 py-4 text-sm sm:text-base font-bold tracking-wider text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              EKİBİMİZİ TANIYIN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
