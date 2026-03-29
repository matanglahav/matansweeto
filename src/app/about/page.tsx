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
          <p>I’m Matan.</p>

          <p>
            I’m stepping into my thirties with a lot of reverence for this
            precious life, all living beings, and living in peace, love and
            prosperity.
          </p>

          <p>
            I’m focusing my energy on creating and learning music—creating
            original songs, collaborating with friends, and learning special
            songs from the Amazon jungle.
          </p>

          <p>I’m a 500 hr Vinyasa &amp; Ashtanga yoga teacher.</p>

          <p>
            I’m guiding groups to the Amazon jungle (stay tuned for New Year’s
            2027).
          </p>

          <p>
            I’m hosting events, music concerts and medicine ceremonies
            worldwide.
          </p>

          <p>I appreciate your presence and time here.</p>

          <p>
            I invite you to tune in to my{" "}
            <Link
              href="/music"
              className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800 transition-colors"
            >
              music
            </Link>{" "}
            —and hopefully connect somewhere around the world one day.
          </p>
        </div>
      </div>
    </main>
  );
}