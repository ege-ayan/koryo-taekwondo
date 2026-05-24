import ProgramsHero from "./_components/programs-hero";
import ProgramCard from "./_components/program-card";
import TrialBanner from "./_components/trial-banner";
import { programs } from "./_components/programs-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taekwondo Eğitim Programlarımız | Koryo Taekwondo Yaşamkent",
  description: "Minikler, gençler, yetişkinler ve kadınlar için özel olarak hazırlanmış taekwondo ders programlarımızı ve günlerini inceleyin. Ücretsiz deneme dersine katılın!",
};

export default function ProgramlarPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-zinc-950 text-white min-h-screen">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <ProgramsHero />

      <section className="px-6 pb-12 sm:pb-20 max-w-7xl mx-auto">
        <div className="space-y-16 md:space-y-20 lg:space-y-32">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </section>

      <TrialBanner />
    </div>
  );
}
