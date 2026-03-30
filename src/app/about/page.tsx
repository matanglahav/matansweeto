import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-8"
          style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}
        >
          About
        </h1>

        <div className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed space-y-6">
          <p>I&apos;m Matan</p>

          <p>
            Walking the beauty way with a lot of reverence and gratitude for this one and precious life.
            A sweet heart wish for all living beings, May we all live in peace, love and prosperity.
          </p>

          <p>
            2026 is very much focusing my energy on creating and learning music.
            Creating more original songs, Collaborating with friends &amp; Learning special songs from the amazon jungle.
          </p>

          <p>I&apos;m a 500 hr Vinyasa &amp; Ashtanga yoga teacher.</p>

          <p>
            New years, 2027, I&apos;ll be supporting an immersive adventure to the Amazon Forest to participate in a
            powerful container studying and Celebrating with the Noke Koi Tribe.
          </p>

          <p>
            Hosting events, music concerts and medicine ceremonies worldwide.
            Find me in Vancouver Island, Canada, This Summer!
          </p>

          <p>
            I appreciate your presence and time here &amp; I invite you to tune in to my{" "}
            <Link
              href="/music"
              className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800 transition-colors"
            >
              music
            </Link>{" "}
            &lt;3
          </p>

          <p>
            Buying an album or two from my{" "}
            <a
              href="https://matansweeto.bandcamp.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800 transition-colors"
            >
              bandcamp store
            </a>{" "}
            is a huge support and is very appreciated!
          </p>

          <p>hopefully connect somewhere around the world one day!!</p>
        </div>
      </div>
    </main>
  );
}