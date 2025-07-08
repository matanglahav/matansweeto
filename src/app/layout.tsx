import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat, Quicksand } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"] });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Matan Sweeto",
  description: "Spiritual Musician and Ceremony Guide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${quicksand.className} bg-white text-gray-900 font-sans`}>
        <Navbar />
        <div className="min-h-[calc(100vh-120px)] flex flex-col justify-between">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}