"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-600 to-teal-500 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Navigation Links */}
        <div className="pt-8">
          <nav className="flex flex-wrap justify-center gap-8 mb-6">
            <Link
              href="/"
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/music"
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Music
            </Link>
            <Link
              href="/retreats"
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Retreats
            </Link>
            <Link
              href="/join-the-jungle"
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Join the Jungle
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-cyan-200 text-sm">
            © {new Date().getFullYear()} Matan Sweeto. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}