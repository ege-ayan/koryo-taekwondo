import { Sparkles, Flame, Shield, Heart } from "lucide-react";
import { Program } from "./program-card";

export const programs: Program[] = [
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
        days: "Hafta içi dersleri:",
        hours: "Salı - Perşembe, 19:00 - 22:00",
      },
      {
        days: "Hafta sonu dersleri:",
        hours: "Cumartesi, 19:00 - 22:00",
        isWeekend: true,
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
