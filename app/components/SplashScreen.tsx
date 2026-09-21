"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onOpen?: () => void;
}

export default function SplashScreen({ onOpen }: SplashScreenProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = () => {
    if (isOpening || isDismissed) return;
    setIsOpening(true);
    if (onOpen) onOpen();
    setTimeout(() => {
      setIsDismissed(true);
    }, 900);
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#fbf9f5] cursor-pointer select-none overflow-hidden transition-all duration-900 ease-in-out ${
        isOpening
          ? "opacity-0 scale-105 blur-sm pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      aria-label="Click anywhere to open the wedding invitation"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleOpen();
      }}
    >
      {/* Splash Background Image */}
      <Image
        src="/splash-background.jpg"
        alt="Wedding Splash Background"
        fill
        priority
        className="object-cover object-center pointer-events-none"
      />

      {/* Ambient Warm Translucent Overlay for Readability */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#fbf9f5]/75 via-[#fbf9f5]/55 to-[#fbf9f5]/80 backdrop-blur-[0.5px]"
        aria-hidden="true"
      />

      {/* Luxury Beeralu Frame Overlay */}
      <div className="website-frame pointer-events-none" aria-hidden="true" />

      {/* Inner Decorative Hairline Border - Placed comfortably inside the Beeralu Lace */}
      <div
        className="absolute top-[48px] bottom-[48px] left-[62px] right-[62px] sm:top-[98px] sm:bottom-[98px] sm:left-[138px] sm:right-[138px] md:top-[120px] md:bottom-[120px] md:left-[170px] md:right-[170px] border border-[#ba8d53]/25 rounded-2xl sm:rounded-3xl pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle Corner Accents */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[#ba8d53]/45 rounded-tl-md" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[#ba8d53]/45 rounded-tr-md" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[#ba8d53]/45 rounded-bl-md" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-[#ba8d53]/45 rounded-br-md" />
      </div>

      {/* Main Center Content Container with Precise Safe-Padding for Mobile */}
      <div className="relative z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md md:max-w-lg mx-auto flex flex-col items-center text-center px-2 py-3 sm:py-6 space-y-2.5 sm:space-y-4 md:space-y-5">
        {/* Monogram Crest */}
        <div className="relative w-16 xs:w-20 sm:w-28 md:w-36 aspect-[581/565] transition-transform duration-700 hover:scale-105">
          <Image
            src="/pd-logo.png"
            alt="Pulith & Dinithi Monogram"
            width={581}
            height={565}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Header Ribbon & Names */}
        <div className="space-y-0.5 sm:space-y-1">
          <span className="font-playfair-sc text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#ba8d53] font-medium block">
            The Wedding Of
          </span>
          <h1 className="couple-name text-[38px] xs:text-[44px] sm:text-5xl md:text-6xl font-bold leading-[1.12] sm:leading-tight">
            <span className="block sm:inline">Dinithi</span>{" "}
            <span className="inline-block sm:inline sm:mx-2 text-2xl xs:text-3xl sm:text-4xl font-light my-0.5 sm:my-0">
              &amp;
            </span>{" "}
            <span className="block sm:inline">Pulith</span>
          </h1>
        </div>

        {/* Fading Gold Divider */}
        <div className="w-14 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/70 to-transparent my-0.5 sm:my-1" />

        {/* Date & Destination */}
        <div className="space-y-0.5">
          <p className="font-numbers text-xs sm:text-sm tracking-[0.2em] text-[#68625b] uppercase font-semibold">
            October 21, 2026
          </p>
          <p className="font-playfair text-[10px] sm:text-xs tracking-[0.18em] text-[#8a7569] uppercase font-light">
            Cinnamon Bentota Beach
          </p>
        </div>

        {/* Interactive "Open Invitation" Button (Bespoke Editorial Double-Hairline Cartouche) */}
        <div className="pt-3 sm:pt-5 flex flex-col items-center space-y-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            className="group relative inline-flex items-center justify-center px-8 sm:px-11 py-2.5 sm:py-3 rounded-full bg-[#ffffff]/85 hover:bg-[#ba8d53] text-[#785b48] hover:text-white border border-[#ba8d53]/45 hover:border-[#ba8d53] shadow-[0_2px_12px_rgba(186,141,83,0.1)] hover:shadow-[0_6px_22px_rgba(186,141,83,0.28)] backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {/* Inner Concentric Hairline Ring */}
            <span
              className="absolute inset-[3px] rounded-full border border-[#ba8d53]/25 group-hover:border-white/35 transition-colors duration-300 pointer-events-none"
              aria-hidden="true"
            />

            {/* Typography */}
            <span className="font-playfair-sc text-xs sm:text-[13px] uppercase tracking-[0.28em] font-medium transition-colors duration-300">
              Open Invitation
            </span>
          </button>

          {/* Understated Whisper Prompt */}
          <span className="font-playfair-sc text-[9px] sm:text-[10px] uppercase tracking-[0.26em] text-[#9e8b80] font-light">
            or tap anywhere to enter
          </span>
        </div>
      </div>
    </div>
  );
}
