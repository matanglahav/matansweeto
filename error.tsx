'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white">
      <div className="max-w-md mx-auto text-center p-8 bg-white/80 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-700 mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-full shadow transition transform hover:-translate-y-1"
        >
          Try again
        </button>
      </div>
    </div>
  )
}