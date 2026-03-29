import Link from "next/link";

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.35-1.6-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.06-.14-.61-1.48-.84-2.03-.22-.54-.45-.47-.61-.48h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.12 2.81c.14.18 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.57.66.21 1.27.18 1.75.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32Z"
      />
      <path
        fill="currentColor"
        d="M26.64 5.36A14.95 14.95 0 0 0 16 1C7.73 1 1 7.73 1 16c0 2.64.7 5.2 2.02 7.45L1 31l7.74-1.97A14.93 14.93 0 0 0 16 31c8.27 0 15-6.73 15-15 0-4.01-1.56-7.79-4.36-10.64ZM16 28.5c-2.29 0-4.54-.62-6.51-1.8l-.47-.28-4.6 1.17 1.23-4.49-.3-.46A12.43 12.43 0 0 1 3.5 16C3.5 9.11 9.11 3.5 16 3.5c3.34 0 6.48 1.3 8.84 3.66A12.41 12.41 0 0 1 28.5 16c0 6.89-5.61 12.5-12.5 12.5Z"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z"
      />
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
      <path
        fill="currentColor"
        d="M17.4 6.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

export default function RetreatsPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-8"
          style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}
        >
          Upcoming Retreats
        </h1>

        {/* NEW YEARS 2027 */}
        <section className="bg-white/60 backdrop-blur rounded-3xl shadow-xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-4">
            New Year&apos;s 2027
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I&apos;m super stoked to visit, work and study with the Nike Koi
            tribe Aldeia Meke Waninawa.
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
            Considering working with me?
            <br />
            Please reach out and let&apos;s chat.
          </p>

          <div className="text-left max-w-2xl mx-auto mt-8">
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">
              What I&apos;m offering:
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>Yoga and meditation instructor</li>
              <li>Ceremony Facilitator &amp; Space Holder</li>
              <li>Ceremonial music</li>
              <li>Various workshops, unique &amp; fun group activities</li>
              <li>A network of beautiful humans world-wide</li>
              <li>And soul much more!!</li>
            </ul>
          </div>

          {/* CONTACT ICON BUTTONS */}
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

            <a
              href="mailto:matansweeto@gmail.com"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-white/60 shadow-md hover:shadow-lg hover:bg-white transition-all text-gray-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-700 text-white">
                <IconMail className="h-5 w-5" />
              </span>
              <span className="font-semibold">Email</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}