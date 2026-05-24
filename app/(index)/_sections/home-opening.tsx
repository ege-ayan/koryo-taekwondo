import Link from "next/link";

export default function HomeOpening() {
  return (
    <section className="relative min-h-[calc(100vh-160px)] flex items-center justify-start overflow-hidden bg-zinc-950 px-6 sm:px-8 py-20 lg:py-32">
      {/* Background Media Container (Autoplaying Local Video) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <video
          src="/videos/koryo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/80 via-zinc-950/45 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-zinc-950/20" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          {/* Main Headings */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              KORYO{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400">
                TAEKWONDO
              </span>
              <br />
              YAŞAMKENT
            </h1>
            <p className="text-lg sm:text-xl font-medium tracking-wide text-zinc-300">
              Çocuk Spor Eğitimi • Taekwondo Eğitimi • Ankara Taekwondo Spor
              Kulübü
            </p>
          </div>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-light">
            Türkiye ve Avrupa Şampiyonu Erkan Ercan liderliğindeki Ankara
            Yaşamkent’teki modern salonumuzda, 5 yaşından itibaren her yaş
            grubuna ve seviyeye uygun profesyonel taekwondo eğitimleri
            sunuyoruz. Disiplin, güç, saygı ve özgüvenin adresi!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-[#821111] hover:bg-[#ad1a1a] px-8 py-4 text-base font-bold tracking-wider text-white shadow-lg shadow-red-950/50 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              BİZE ULAŞIN
            </Link>
            <Link
              href="/programlar"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-500 backdrop-blur-sm px-8 py-4 text-base font-bold tracking-wider text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              PROGRAMLARIMIZ
            </Link>
          </div>

          {/* Stats / Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-zinc-900/60 max-w-xl">
            <div className="space-y-1">
              <span className="block text-2xl font-bold text-white">
                5+ Yaş
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Her Yaş Grubuna Özel
              </span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-bold text-red-500">
                Şampiyon
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Milli Antrenörler
              </span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-bold text-white">
                Modern
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Güvenli Spor Salonu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
