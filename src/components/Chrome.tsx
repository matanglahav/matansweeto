"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Chrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLinkInBioPage = pathname === "/link-in-bio";

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
      {!isLinkInBioPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isLinkInBioPage && <Footer />}
    </div>
  );
}