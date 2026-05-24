import React from "react";
import Image from "next/image";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şampiyon Antrenör Kadromuz | Koryo Taekwondo Yaşamkent",
  description: "Milli antrenör Erkan Ercan liderliğindeki şampiyon ve lisanslı eğitmen kadromuzla tanışın. Koryo Taekwondo Yaşamkent eğitmenlerimiz hakkında bilgi edinin.",
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  tags: {
    label: string;
    icon: React.ReactNode;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Erkan Ercan",
    role: "Başantrenör / Kurucu",
    image: "/images/team/erkan-ercan.webp",
    bio: "Erkan Ercan, 1979 yılından bu yana taekwondo camiasında aktif olarak yer almaktadır. Ulusal ve uluslararası şampiyonalarda kazandığı başarılarla Koryo Taekwondo'nun kurucu başantrenörü olan Ercan; Türkiye Taekwondo Federasyonu, Kukkiwon, WTE (World Taekwondo Europe) ve WDATF resmi antrenörlük lisanslarına sahiptir.",
    tags: [
      { label: "Milli Antrenör", icon: <Award className="h-3 w-3 shrink-0" /> },
      {
        label: "Kukkiwon Lisanslı",
        icon: <ShieldCheck className="h-3 w-3 shrink-0" />,
      },
      {
        label: "WTE Lisanslı",
        icon: <ShieldCheck className="h-3 w-3 shrink-0" />,
      },
      {
        label: "WDATF Lisanslı",
        icon: <ShieldCheck className="h-3 w-3 shrink-0" />,
      },
    ],
  },
  {
    id: 2,
    name: "Buğra Ercan",
    role: "Antrenör",
    image: "/images/team/bugra-ercan.webp",
    bio: "Ulusal ve uluslararası turnuvalarda çok sayıda şampiyonluk ve derece sahibi olan Buğra Ercan, Gazi Üniversitesi Beden Eğitimi ve Spor Yüksekokulu'nda (BESYO) akademik eğitimini sürdürmektedir. Kurucumuz Erkan Ercan'ın vizyonunu takip ederek genç sporcuların gelişimine ve eğitimine liderlik etmektedir.",
    tags: [
      {
        label: "Şampiyon Sporcu",
        icon: <Award className="h-3 w-3 shrink-0" />,
      },
      {
        label: "Gazi Üniversitesi BESYO",
        icon: <GraduationCap className="h-3 w-3 shrink-0" />,
      },
      {
        label: "Siyah Kuşak",
        icon: <ShieldCheck className="h-3 w-3 shrink-0" />,
      },
    ],
  },
];

export default function Page() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-12 sm:py-20 flex-1 flex flex-col justify-center">
      <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-red-950/10 blur-[150px] pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-red-950/10 blur-[150px] pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 sm:px-8 relative z-10 w-full">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-red-500 bg-red-950/30 border border-red-900/50 uppercase mb-4">
            <Award className="h-3.5 w-3.5" /> Şampiyon Kadromuz
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
            Eğitmenlerimiz
          </h1>
          <div className="mx-auto h-[3px] w-24 bg-red-600 rounded-full my-4" />
          <p className="text-zinc-400 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Türkiye ve Avrupa Şampiyonu kadromuz eşliğinde, her yaş grubuna
            taekwondo felsefesini, gücünü ve disiplinini aşılıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col items-center text-center space-y-6 rounded-3xl border border-zinc-900 bg-zinc-900/30 p-8 backdrop-blur-md transition-all duration-500 hover:border-red-950/50 hover:bg-zinc-900/50 shadow-xl">
      <div className="relative h-48 w-48 sm:h-56 sm:w-56 transition-transform duration-500">
        <div className="absolute -inset-1.5 rounded-full bg-linear-to-br from-red-600/30 to-red-950/0 opacity-60 blur-md group-hover:opacity-100 group-hover:from-red-600/50 transition-all duration-500" />
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-950 group-hover:border-red-600 transition-colors duration-500">
          <Image
            src={member.image}
            alt={`${member.name} - Koryo Taekwondo`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 192px, 224px"
            priority
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
          {member.name}
        </h2>
        <span className="block text-sm font-bold uppercase tracking-wider text-red-500">
          {member.role}
        </span>
      </div>

      <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-sm">
        {member.bio}
      </p>
      <div className="flex flex-wrap justify-center gap-2 pt-2">
        {member.tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400 transition-all duration-500 group-hover:border-red-950/30 group-hover:text-red-400 cursor-default"
          >
            {tag.icon}
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
