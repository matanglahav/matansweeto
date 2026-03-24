export default function RetreatsPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6"
          style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}
        >
          Retreats
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          (Add retreat details + how to join here)
        </p>
      </div>
    </main>
  );
}