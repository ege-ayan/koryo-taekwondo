export interface OpeningHour {
  day: number;
  name: string;
  open: string;
  close: string;
  isWeekend?: boolean;
}

export const openingHours: OpeningHour[] = [
  { day: 1, name: "Pazartesi", open: "16:00", close: "21:30" },
  { day: 2, name: "Salı", open: "16:00", close: "21:00" },
  { day: 3, name: "Çarşamba", open: "16:00", close: "21:30" },
  { day: 4, name: "Perşembe", open: "16:00", close: "21:00" },
  { day: 5, name: "Cuma", open: "16:00", close: "21:30" },
  { day: 6, name: "Cumartesi", open: "10:00", close: "21:00", isWeekend: true },
  { day: 0, name: "Pazar", open: "10:00", close: "17:30", isWeekend: true },
];
