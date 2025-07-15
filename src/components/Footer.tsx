"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      console.log("Subscribing email:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-gradient-to-r from-cyan-600 to-teal-500 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
            Stay Connected
          </h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the journey of music, ceremony, and healing. Subscribe to receive updates about upcoming events, new music, and spiritual gatherings.
          </p>
          
          {/* Email Subscription */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-cyan-900 font-semibold px-6 py-3 rounded-full transition-colors duration-200 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            {isSubscribed && (
              <p className="text-yellow-200 mt-3 font-medium">
                Thank you for subscribing! 🙏
              </p>
            )}
          </form>
        </div>
        
        {/* Navigation Links */}
        <div className="border-t border-cyan-400/30 pt-8">
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
              href="/sponsorship" 
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Sponsorship
            </Link>
            <Link 
              href="/contact" 
              className="text-lg text-cyan-100 hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
          
          {/* Copyright */}
          <p className="text-cyan-200 text-sm">
            © 2025 Matan Sweeto. All rights reserved. Made with ❤️ for healing and connection.
          </p>
        </div>
      </div>
    </footer>
  );
}