"use client";

import Image from "next/image";
import { useState } from "react";

export default function JoinTheJunglePage() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const openImage = () => setIsImageOpen(true);
  const closeImage = () => setIsImageOpen(false);

  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6">
          Join the Jungle
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          (Add your jungle journey details here)
        </p>

        <button
          type="button"
          onClick={openImage}
          className="group mx-auto block w-full max-w-xl overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-4 shadow-xl backdrop-blur transition-all hover:shadow-2xl"
          aria-label="Open Join the Jungle image"
        >
          <div className="relative aspect-[4/5] w-full rounded-2xl bg-slate-950/10">
            <Image
              src="/images/jungle/join-the-jungle.jpeg"
              alt="Join the Jungle"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        </button>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
            aria-label="Close image viewer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={closeImage}
            className="relative w-full max-w-5xl"
            aria-label="Close Join the Jungle image"
          >
            <div className="relative aspect-[4/5] max-h-[85vh] w-full overflow-hidden rounded-3xl bg-black">
              <Image
                src="/images/jungle/join-the-jungle.jpeg"
                alt="Join the Jungle"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </button>
        </div>
      )}
    </main>
  );
}
