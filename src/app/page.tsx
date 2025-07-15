import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white">
      {/* Hero Guitar Image */}
      <div className="w-full relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
        <Image
          src="/images/guitar.JPG"
          alt="Guitar"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      
      {/* Hero section */}
      <section className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-lg p-6 md:p-10 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-4" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
          Matan Sweeto
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-3">Spiritual Musician & Ceremony Guide</h2>
        <p className="text-lg md:text-xl text-gray-800 mb-4">
          Welcome! I weave music, ceremony, and ancestral wisdom for global healing. Join my journey, listen, and support the vision.
        </p>
      </section>

      {/* My Story Section */}
      <section className="w-full max-w-2xl bg-white/60 rounded-xl shadow-md p-6 mb-8 text-center">
        <h2 className="text-2xl font-bold text-cyan-700 mb-2">My Story</h2>
        <p className="text-lg text-gray-700">
          My path is one of heart, song, and service. From the forests of South America to the sacred spaces of the world,
          I&apos;ve devoted my life to sharing music that heals and to guiding ceremonies that connect us to spirit, to the earth, and to each other.<br /><br />
          Every note is a prayer, every gathering a chance for transformation. Thank you for being here.
        </p>
      </section>

      {/* Sponsor Call to Action */}
      <section className="w-full max-w-2xl bg-gradient-to-r from-cyan-200 to-teal-100 rounded-xl shadow-md p-6 mb-8 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-teal-700 mb-2">Support the Journey</h2>
        <p className="text-lg text-gray-700 mb-4">
          Your support empowers my path of music and ceremony. Become a sponsor and help bring more healing and connection to the world.
        </p>
        <a
          href="/sponsorship"
          className="inline-block bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-full shadow transition transform hover:-translate-y-1"
        >
          Become a Sponsor
        </a>
      </section>

      {/* Gallery/Second Image */}
      <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl mb-8">
        <Image
          src="/images/HandsOnHeart.jpeg"
          alt="Hands on Heart"
          width={1200}
          height={400}
          className="object-cover w-full h-52 md:h-72"
          style={{ objectPosition: "center 28%" }}
        />
      </div>
    </main>
  );
}