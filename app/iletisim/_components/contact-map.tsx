export default function ContactMap() {
  return (
    <div className="lg:col-span-7 flex flex-col">
      <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl flex-1 min-h-[400px] lg:min-h-full flex flex-col group">
        <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-br from-red-600/10 to-red-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <iframe
          src="https://maps.google.com/maps?q=Koryo%20Taekwondo%20Ya%C5%9Famkent%20Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "450px", flexGrow: 1 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="brightness-[0.88] contrast-[1.05] grayscale-10 group-hover:brightness-[0.98] transition-all duration-500"
        />
      </div>
    </div>
  );
}
