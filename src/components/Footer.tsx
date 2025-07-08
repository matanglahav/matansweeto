"use client";


import { FaInstagram, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white py-8 mt-8 shadow-inner">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-200 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://open.spotify.com/artist/YOUR_SPOTIFY_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="hover:text-green-200 transition"
          >
            <FaSpotify />
          </a>
        </div>

        {/* Email Subscribe */}
        <form
          onSubmit={e => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="input input-bordered rounded-full px-4 py-2 w-64 text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-full bg-cyan-700 border-none hover:bg-teal-600 px-6 text-white font-semibold shadow"
          >
            Subscribe
          </button>
        </form>

        {/* Footer Bottom */}
        <div className="text-center text-sm opacity-80 mt-2">
          <p>© 2025 Matan Sweeto</p>
        </div>
      </div>
    </footer>
  );
}