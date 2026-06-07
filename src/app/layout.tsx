import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Chrome from "@/components/Chrome";

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
  return (
    <html lang="en">
      <body className={`${inter.className} ${quicksand.className}`} suppressHydrationWarning={true}>
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
