"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const portugalCeremonyImages = [
  "/images/retreats/portugal-ceremony-1.jpeg",
  "/images/retreats/portugal-ceremony-2.jpeg",
];

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.35-1.6-1.51-1.88-.16-.27-.02-.42.12-.56.12-.16.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
      />
      <path
        fill="currentColor"
        d="M26.64 5.36A14.95 14.95 0 0 0 16 1C7.73 1 1 7.73 1 16c0 2.64.7 5.2 2.02 7.45L1 31l7.74-1.97A14.93 14.93 0 0 0 16 31c8.27 0 15-6.73 15-15 0-4.01-1.56-7.79-4.36-10.64ZM16 28.5c-2.29 0-4.5-.62-6.44-1.8l-.46-.27-4.59 1.17 1.22-4.48-.3-.46A12.42 12.42 0 0 1 3.5 16C3.5 9.11 9.11 3.5 16 3.5c3.32 0 6.45 1.29 8.8 3.64A12.37 12.37 0 0 1 28.5 16c0 6.89-5.61 12.5-12.5 12.5Z"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.4-2.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </svg>
  );
}

export default function RetreatsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const showPrevious = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + portugalCeremonyImages.length) %
        portugalCeremonyImages.length
    );
  };

  const showNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex + 1) % portugalCeremonyImages.length
    );
  };

  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-8"
          style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}
        >
          Upcoming Retreats
        </h1>

        <section className="bg-white/60 backdrop-blur rounded-3xl shadow-xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-6">
            Portugal Ceremony Weekends October 2026
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portugalCeremonyImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-slate-950 shadow-md transition-all hover:shadow-xl"
                aria-label={`Open Portugal ceremony image ${index + 1}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={src}
                    alt={`Portugal Ceremony Weekend poster ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* NEW YEARS 2027 */}
        <section className="bg-white/60 backdrop-blur rounded-3xl shadow-xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-4">
            New Year&apos;s 2027
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
<<<<<<< HEAD
            I&apos;m super stoked to visit, work and study with the Nike Koi tribe!
=======
            I&apos;m super stoked to visit, work and study with the Nike Koi
            tribe!
>>>>>>> bb622b3 (Update retreats page copy and cleanup)
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-5">
            More info at{" "}
            <Link
              href="/join-the-jungle"
              className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-900 transition-colors"
            >
              Join the Jungle
            </Link>
            .
          </p>
        </section>

        {/* HIRE / COLLAB */}
        <section className="bg-white/60 backdrop-blur rounded-3xl shadow-xl p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-4">
            Looking to hire a retreat facilitator?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <br />
            Please reach out and let&apos;s chat.
          </p>

          <div className="text-left max-w-2xl mx-auto mt-8">
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">
              What I&apos;m offering:
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>500hr certified Yoga instructor</li>
              <li>Ceremony Facilitator &amp; Space Holder</li>
              <li>Ceremonial music</li>
              <li>Various workshops, unique &amp; fun group activities</li>
              <li>A network of beautiful humans world-wide</li>
              <li>And soul much more!!</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/97252660635"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-white/60 shadow-md hover:shadow-lg hover:bg-white transition-all text-gray-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                <IconWhatsApp className="h-5 w-5" />
              </span>
              <span className="font-semibold">WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/matansweeto"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-white/60 shadow-md hover:shadow-lg hover:bg-white transition-all text-gray-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                <IconInstagram className="h-5 w-5" />
              </span>
              <span className="font-semibold">@matansweeto</span>
            </a>
          </div>
        </section>
      </div>

      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
            aria-label="Close image viewer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 md:left-6 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="relative w-full max-w-5xl">
            <div className="relative aspect-[3/4] max-h-[85vh] w-full overflow-hidden rounded-3xl bg-black">
              <Image
                src={portugalCeremonyImages[activeImageIndex]}
                alt={`Portugal Ceremony Weekend poster ${activeImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 md:right-6 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}