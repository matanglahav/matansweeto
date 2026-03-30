import { SiBandcamp, SiSpotify } from "react-icons/si";

export default function MusicPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6"
          style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}
        >
          Music
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16">
          Here are links to the various platforms where you can find and listen to my music
        </p>

        {/* Platform Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* Bandcamp */}
          <a
            href="https://matansweeto.bandcamp.com/album/spiraling-rainbows"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1da0c3] hover:bg-[#1b8fad] text-white font-semibold py-4 px-10 rounded-full shadow-xl transition transform hover:-translate-y-2 text-xl"
          >
            <SiBandcamp size={28} />
            Bandcamp
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/1gbdkHLoka2Y0PaH2d5KPO?si=pm1V7W8oTICwh6iKgyDUOw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1DB954] hover:bg-[#1aa34a] text-white font-semibold py-4 px-10 rounded-full shadow-xl transition transform hover:-translate-y-2 text-xl"
          >
            <SiSpotify size={28} />
            Spotify
          </a>
        </div>

        {/* Coming Soon */}
        <p className="text-lg text-teal-600 font-medium italic">
          More music coming this summer 😉
        </p>
      </div>
    </main>
  );
}