import { Trophy } from "lucide-react";

export default function ProgramsHero() {
  return (
    <section className="relative py-12 sm:py-20 text-center px-6 max-w-5xl mx-auto">
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
        Türkiye ve Avrupa Şampiyonu Erkan Ercan liderliğinde, her yaş grubuna ve
        seviyeye uygun olarak hazırlanmış özel programlarımızla potansiyelinizi
        ortaya çıkarın.
      </p>
    </section>
  );
}
