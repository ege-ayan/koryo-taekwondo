import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function TrialBanner() {
  return (
    <section className="relative px-6 pb-12 sm:pb-16 max-w-5xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-linear-to-b from-zinc-900/60 to-zinc-950/80 p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-950/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/50 border border-red-900/50 mb-6">
          <Users className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> Aramıza Katılın
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          İlk Dersiniz Bizden <br className="sm:hidden" />{" "}
          <span className="text-red-500">Ücretsiz!</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed mb-8">
          Derslerimizi yakından görmek, salonumuzu gezmek ve şampiyon kadromuzla
          tanışmak için hemen ücretsiz bir deneme dersi randevusu oluşturun.
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
  );
}
