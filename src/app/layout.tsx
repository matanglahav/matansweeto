"use client";

import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matan Sweeto",
  description: "Music, events, ceremonies, retreats, and immersive journeys into the Amazon jungle."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLinkInBioPage = pathname === "/link-in-bio";

  return (
    <html lang="en">
      <body className={`${inter.className} ${quicksand.className}`} suppressHydrationWarning={true}>
        <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
          {!isLinkInBioPage && <Navbar />}
          <main className="flex-1">
            {children}
          </main>
          {!isLinkInBioPage && <Footer />}
        </div>
      </body>
    </html>
  );
}
