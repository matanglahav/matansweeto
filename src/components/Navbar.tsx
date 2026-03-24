"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Retreats", href: "/retreats" },
  { label: "Join the Jungle", href: "/join-the-jungle" },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((v) => !v);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 shadow-lg px-6 py-4 text-white font-semibold relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide hover:text-yellow-200 transition-colors"
            style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}
          >
            Matan Sweeto
          </Link>
        </div>

        <div className="lg:hidden relative">
          <button
            onClick={toggleDropdown}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg z-50">
              <div className="py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-cyan-900 hover:bg-cyan-50 font-medium transition-colors"
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-yellow-200 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-yellow-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}