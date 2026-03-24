"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-cyan-200 via-teal-100 to-white">
      {/* Hero Guitar Image - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/guitar.JPG"
          alt="Guitar"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
              Hello dear one!
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed drop-shadow-md">
              Thanks for tuning in to my personal page.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section - Appears on Scroll */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed">
              Here I share upcoming music, events, ceremonies, retreats, and immersive journeys into the Amazon jungle.
              <br /><br />
              If you resonate with our work and wish to experience an adventure with us, reach out via WhatsApp or email
              and I will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Rainbow Background Section */}
      <section className="relative px-0 lg:px-32">
        {/* Rainbow Image Container */}
        <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden lg:rounded-3xl lg:shadow-2xl">
          <Image
            src="/images/rainbow.JPG"
            alt="Rainbow"
            fill
            className="object-cover object-center scale-100"
            sizes="100vw"
            style={{ objectPosition: "center 40%" }}
          />
        </div>

        {/* Content Section - Below Image */}
        <div className="w-full px-6 md:px-12 lg:px-16 py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Placeholder sections (we can rewrite or remove next) */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-700 mb-6">
                  What’s alive right now
                </h2>
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                  <p>
                    New music, upcoming gatherings, and jungle journeys—updates coming soon.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-6">
                  Ways to connect
                </h2>
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                  <p>
                    For bookings, collaborations, or questions, reach out via WhatsApp or email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-r from-cyan-200 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 mb-12">
            Connect
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-4 px-10 lg:py-5 lg:px-14 rounded-full shadow-xl transition transform hover:-translate-y-2 text-xl lg:text-2xl"
              >
                Message me
              </a>

              {/* Keep this for now, we can rename when your “Join the Jungle” page exists */}
              <a
                href="/sponsorship"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-cyan-900 font-semibold py-4 px-10 lg:py-5 lg:px-14 rounded-full shadow-xl transition transform hover:-translate-y-2 text-xl lg:text-2xl"
              >
                Support the work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/images/HandsOnHeart.jpeg"
          alt="Hands on Heart"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ objectPosition: "center 28%" }}
        />
      </section>
    </main>
  );
}