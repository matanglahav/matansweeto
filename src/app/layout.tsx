import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Matan Sweeto",
  description: "Spiritual Musician and Ceremony Guide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}