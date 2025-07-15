"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 shadow-lg px-6 py-4 text-white font-semibold relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-extrabold tracking-wide hover:text-yellow-200 transition-colors" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
            Matan Sweeto
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden relative">
          <button onClick={toggleDropdown} className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          
          {/* Mobile dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg z-50">
              <div className="py-2">
                <Link href="/" className="block px-4 py-3 text-cyan-900 hover:bg-cyan-50 font-medium transition-colors" onClick={closeDropdown}>Home</Link>
                <Link href="/mystory" className="block px-4 py-3 text-cyan-900 hover:bg-cyan-50 font-medium transition-colors" onClick={closeDropdown}>My Story</Link>
                <Link href="/sponsorship" className="block px-4 py-3 text-cyan-900 hover:bg-cyan-50 font-medium transition-colors" onClick={closeDropdown}>Sponsorship</Link>
                <Link href="/contact" className="block px-4 py-3 text-cyan-900 hover:bg-cyan-50 font-medium transition-colors" onClick={closeDropdown}>Contact</Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Desktop menu - spread across the right side */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-lg font-medium hover:text-yellow-200 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-yellow-200">
            Home
          </Link>
          <Link href="/mystory" className="text-lg font-medium hover:text-yellow-200 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-yellow-200">
            My Story
          </Link>
          <Link href="/sponsorship" className="text-lg font-medium hover:text-yellow-200 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-yellow-200">
            Sponsorship
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-yellow-200 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-yellow-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}