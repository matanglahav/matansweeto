export default function Sponsorship() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
            Support the Journey
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your support empowers healing through music and ceremony, bringing transformation to communities worldwide.
          </p>
        </section>

        {/* Why Support Section */}
        <section className="bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Why Your Support Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">Music Creation</h3>
              <p className="text-gray-700">
                Fund the creation of healing music, recordings, and ceremonial compositions that touch hearts globally.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">Global Outreach</h3>
              <p className="text-gray-700">
                Enable travel to communities worldwide, bringing ceremony and healing to those who need it most.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">Sacred Spaces</h3>
              <p className="text-gray-700">
                Create and maintain spaces for ceremony, healing circles, and community gatherings.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Sponsorship Levels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Supporter */}
            <div className="bg-white/60 rounded-xl shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">Supporter</h3>
              <p className="text-3xl font-bold text-teal-600 mb-4">$25/month</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>Monthly newsletter</li>
                <li>Early access to new music</li>
                <li>Community updates</li>
              </ul>
              <button className="w-full bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Become a Supporter
              </button>
            </div>

            {/* Guardian */}
            <div className="bg-gradient-to-r from-cyan-200 to-teal-100 rounded-xl shadow-lg p-6 text-center border-2 border-yellow-400">
              <div className="bg-yellow-400 text-cyan-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">Guardian</h3>
              <p className="text-3xl font-bold text-teal-600 mb-4">$75/month</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>All Supporter benefits</li>
                <li>Monthly virtual ceremony access</li>
                <li>Exclusive recordings</li>
                <li>Personal thank you message</li>
              </ul>
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-cyan-900 font-semibold py-3 px-6 rounded-full transition-colors">
                Become a Guardian
              </button>
            </div>

            {/* Healer */}
            <div className="bg-white/60 rounded-xl shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">Healer</h3>
              <p className="text-3xl font-bold text-teal-600 mb-4">$150/month</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>All Guardian benefits</li>
                <li>Quarterly private sessions</li>
                <li>Custom ceremony requests</li>
                <li>Sponsor recognition</li>
              </ul>
              <button className="w-full bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Become a Healer
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-cyan-600 to-teal-500 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Support the Vision?</h2>
          <p className="text-xl mb-6 text-cyan-100">
            Every contribution, no matter the size, helps bring more healing and connection to the world.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-cyan-900 font-semibold py-3 px-8 rounded-full text-lg transition-colors transform hover:scale-105">
            Start Supporting Today
          </button>
        </section>
      </div>
    </main>
  );
}