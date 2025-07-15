export default function About() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
            About Matan
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A journey through music, ceremony, and the sacred connection between healing and community.
          </p>
        </section>

        {/* Story Section */}
        <section className="bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-6">My Journey</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              My path began in the forests and sacred spaces of South America, where I first encountered 
              the profound power of music as a healing force. Through years of study with indigenous teachers 
              and spiritual guides, I learned that every note carries intention, every rhythm holds medicine.
            </p>
            <p>
              Today, I weave together ancient wisdom and contemporary expression, creating spaces where 
              music becomes ceremony, where gathering becomes transformation. My work spans continents, 
              bringing communities together through the universal language of sound and spirit.
            </p>
            <p>
              Whether through intimate acoustic sessions or large ceremonial gatherings, my mission remains 
              constant: to facilitate healing, connection, and awakening through the sacred art of music.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-r from-cyan-200 to-teal-100 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-4">Vision</h3>
              <p className="text-gray-700">
                A world where music serves as a bridge between cultures, a medicine for the soul, 
                and a catalyst for collective healing and transformation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-4">Mission</h3>
              <p className="text-gray-700">
                To create sacred spaces through music and ceremony where individuals and communities 
                can reconnect with their authentic selves and the interconnected web of life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}