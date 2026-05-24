import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koryo Taekwondo Yaşamkent",
  description: "Koryo Taekwondo Yaşamkent Resmi Websitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-zinc-950 text-white antialiased`}
      >
        <Analytics />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
