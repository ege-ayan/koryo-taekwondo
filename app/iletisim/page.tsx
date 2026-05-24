import ContactHero from "./_components/contact-hero";
import ContactInfo from "./_components/contact-info";
import ContactHours from "./_components/contact-hours";
import ContactMap from "./_components/contact-map";
import { openingHours } from "./_components/opening-hours-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim ve Yol Tarifi | Koryo Taekwondo Yaşamkent",
  description: "Yaşamkent Çankaya'daki modern taekwondo salonumuzun adresi, telefon numarası, çalışma saatleri ve Google Maps yol tarifi. Bize anında ulaşın!",
};

export const revalidate = 60;

export default function IletisimPage() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const turkeyTime = new Date(utc + 3600000 * 3);

  const day = turkeyTime.getDay();
  const hours = turkeyTime.getHours();
  const minutes = turkeyTime.getMinutes();

  const todayHours = openingHours.find((h) => h.day === day);
  let isOpenToday = false;
  let statusText = "";

  if (!todayHours) {
    isOpenToday = false;
    statusText = "Bugün kapalıyız.";
  } else {
    const parseTime = (timeStr: string) => {
      const [h, m] = timeStr.split(":").map(Number);
      return h * 60 + m;
    };

    const currentMinutes = hours * 60 + minutes;
    const openMinutes = parseTime(todayHours.open);
    const closeMinutes = parseTime(todayHours.close);

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      isOpenToday = true;
      statusText = `Şu An Açığız (Kapanış: ${todayHours.close})`;
    } else {
      isOpenToday = false;
      statusText = `Şu An Kapalıyız (Bugün: ${todayHours.open} - ${todayHours.close})`;
    }
  }

  return (
    <div className="relative w-full overflow-x-hidden bg-zinc-950 text-white min-h-screen">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      <ContactHero />

      <section className="px-6 pb-12 sm:pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <ContactInfo />
            <ContactHours
              isOpenToday={isOpenToday}
              statusText={statusText}
              activeDay={day}
            />
          </div>

          <ContactMap />
        </div>
      </section>
    </div>
  );
}
