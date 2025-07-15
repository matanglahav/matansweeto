"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-cyan-200 via-teal-100 to-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
            Connect
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Reach out for ceremony bookings, collaboration opportunities, or to simply share your journey.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section className="bg-white/80 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-teal-600 mb-6">Send a Message</h2>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! I&apos;ll get back to you soon. 🙏
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="ceremony">Ceremony Booking</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Share your message, questions, or how we might connect..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-200 to-teal-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-teal-700 mb-6">Let&apos;s Connect</h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-cyan-700 mb-2">Ceremony Bookings</h3>
                  <p>Available for private ceremonies, healing circles, and community gatherings worldwide.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-700 mb-2">Collaborations</h3>
                  <p>Open to working with fellow musicians, healers, and ceremony facilitators.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-700 mb-2">Response Time</h3>
                  <p>I typically respond within 24-48 hours. For urgent matters, please mention it in your message.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-cyan-700 mb-4">Follow the Journey</h3>
              <p className="text-gray-700 mb-4">
                Stay updated with ceremony schedules, new music releases, and healing gatherings.
              </p>
              <div className="flex space-x-4">
                {/* Add social media links here when ready */}
                <div className="text-sm text-gray-600">
                  Social media links coming soon...
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}