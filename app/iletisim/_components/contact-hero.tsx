export default function ContactHero() {
  return (
    <section className="relative py-12 sm:py-20 text-center px-6 max-w-4xl mx-auto">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-red-500 bg-red-950/30 border border-red-900/50 uppercase mb-4">
        İletişim Bilgilerimiz
      </span>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
        Bize{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-red-400">
          Ulaşın
        </span>
      </h1>
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
        Daha da iyisi, gelin, yüz yüze görüşelim! Profesyonel taekwondo
        salonumuzda sizi ağırlamaktan ve şampiyon kadromuzla tanıştırmaktan
        mutluluk duyarız.
      </p>
    </section>
  );
}
