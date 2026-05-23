"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/images/home/gallery/gallery-1.webp" },
  { id: 2, src: "/images/home/gallery/gallery-2.webp" },
  { id: 3, src: "/images/home/gallery/gallery-3.webp" },
  { id: 4, src: "/images/home/gallery/gallery-4.webp" },
  { id: 5, src: "/images/home/gallery/gallery-5.webp" },
  { id: 6, src: "/images/home/gallery/gallery-6.webp" },
];

export default function HomeGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : (prev as number) - 1,
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : (prev as number) + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 lg:py-32 border-t border-zinc-900">
      {/* Background glow effects */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-red-950/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Section Headers */}
        <div className="flex flex-col justify-start gap-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block">
            BİZDEN ANLAR VE SPORCULARIMIZ
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Koryo Taekwondo Anılarımız
          </h2>
          <div className="h-[3px] w-20 bg-red-600 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-900/20 shadow-xl cursor-pointer hover:border-red-950/50 transition-colors duration-500"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt="Koryo Taekwondo Galeri Görseli"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Overlay for Premium depth */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-zinc-950/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Glowing Outline border on hover */}
              <div className="absolute inset-4 rounded-2xl border border-white/0 group-hover:border-white/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-55 rounded-full bg-zinc-900/80 p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200 border border-zinc-800"
            aria-label="Kapat"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-55 rounded-full bg-zinc-900/80 p-4 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200 border border-zinc-800"
            aria-label="Önceki görsel"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 z-55 rounded-full bg-zinc-900/80 p-4 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200 border border-zinc-800"
            aria-label="Sonraki görsel"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Main Large Image Container */}
          <div className="relative w-[90vw] h-[75vh] max-w-5xl">
            <Image
              src={galleryItems[lightboxIndex].src}
              alt="Koryo Taekwondo Galeri Tam Ekran Görseli"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
