import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col space-y-6 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold tracking-wide border-b border-zinc-800/80 pb-4">
        Koryo Taekwondo Yaşamkent
      </h2>

      <div className="flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 shadow-inner">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Salon Adresimiz
          </h3>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
            Yaşamkent, 3207. Cd. No:95, 06810 <br /> Çankaya / Ankara
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 shadow-inner">
          <Phone className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Telefon Numaramız
          </h3>
          <Link
            href="tel:+905326631013"
            className="block text-lg sm:text-xl font-bold text-red-400 hover:text-red-300 transition-colors duration-200"
          >
            +90 532 663 10 13
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-red-950/30 border border-red-900/30 flex items-center justify-center text-red-500 shadow-inner">
          <FaInstagram className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Instagram Sayfamız
          </h3>
          <Link
            href="https://www.instagram.com/koryotaekwondo_cayyolu/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm sm:text-base text-zinc-200 hover:text-red-400 transition-colors duration-200 font-light"
          >
            @koryotaekwondo_cayyolu
          </Link>
        </div>
      </div>
    </div>
  );
}
