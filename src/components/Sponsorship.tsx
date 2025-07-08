import Image from "next/image";

export default function Sponsorship() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-200 via-teal-100 to-white flex flex-col items-center justify-center px-4 py-10 font-sans">
      <section className="w-full max-w-3xl flex flex-col items-center mb-8">
        {/* Beach Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xl mb-6">
          <Image
            src="/images/beach.jpeg"
            alt="Beach background"
            width={1200}
            height={400}
            className="object-cover w-full h-52 sm:h-72 md:h-80"
            style={{ objectPosition: "40% 28%" }}
            priority
          />
        </div>
        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-10 text-center text-gray-900">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
            Become a Sponsor
          </h2>
          <p className="mb-6 text-lg sm:text-xl font-medium">
            You are invited to become a sacred supporter of my journey — one that weaves together music, ceremony, ancestral wisdom, and global healing.
          </p>
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">🌿 What Does Sponsorship Mean?</h3>
          <ul className="text-base sm:text-lg mb-5 space-y-2 text-center">
            <li>
              <strong className="text-teal-700">A Financial Ally:</strong> You empower me to fully walk my path — supporting my travels, teachings, ceremonies, and album creation.
            </li>
            <li>
              <strong className="text-teal-700">A Spiritual Partner:</strong> You believe in the vision. Your support is a blessing that ripples through every soul I touch.
            </li>
            <li>
              <strong className="text-teal-700">A Relationship of Reciprocity:</strong> I honor your gift with updates, music, prayers, offerings, and gratitude — in ways that feel right to us both.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">🌎 Why Now?</h3>
          <p className="mb-4 text-lg">
            I'm preparing for a powerful pilgrimage to Peru and Brazil — a return to the roots of ancient medicine ways. This moment is a portal. I trust that the right supporter will arrive, aligned in heart and purpose.
          </p>
          <p className="mb-2 text-lg">
            For a detailed overview of my journey, expenses, and how I honor my sponsors, please{" "}
            <a
              href="https://docs.google.com/document/d/your-doc-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 underline font-semibold hover:text-teal-700 transition"
            >
              view this document
            </a>
            .
          </p>
        </div>
        {/* Hands On Heart Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xl mt-6">
          <Image
            src="/images/HandsOnHeart.jpeg"
            alt="Support the Vision"
            width={1200}
            height={400}
            className="object-cover w-full h-52 sm:h-72 md:h-80"
            style={{ objectPosition: "40% 28%" }}
          />
        </div>
      </section>
    </main>
  );
}