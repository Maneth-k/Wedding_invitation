import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const purgatory = localFont({
  src: "../public/Purgatory.ttf",
  variable: "--font-purgatory",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulith & Dinithi - Wedding Invitation",
  description: "Celebrate the marriage of Pulith & Dinithi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${purgatory.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#fbf9f5] text-[#332622]">
        {/* Fixed 9-Slice Website Border (Beeralu Lace) */}
        <div className="website-frame" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
