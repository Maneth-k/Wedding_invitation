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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-[#fbf9f5] text-[#332622]">
        {/* Fixed 9-Slice Website Border (Beeralu Lace) */}
        <div className="website-frame" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
