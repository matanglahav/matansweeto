import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white">
      <div className="max-w-md mx-auto text-center p-8 bg-white/80 rounded-2xl shadow-lg">
        <h2 className="text-6xl font-bold text-cyan-700 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Page Not Found</h3>
        <p className="text-gray-700 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-full shadow transition transform hover:-translate-y-1"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}