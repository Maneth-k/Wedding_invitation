"use client";

import React from "react";

import Image from "next/image";

export default function WeddingHomePage() {
  return (
    <div className="relative min-h-screen flex flex-col font-serif selection:bg-[#ecdccf] selection:text-[#412e27]">
      {/* Fixed 9-slice Beeralu viewport border overlay */}
      <div className="website-frame" aria-hidden="true" />

      {/* 
        Safe padding buffer:
        - Mobile: px-20 (80px) clears the 76px side border; py-16 (64px) clears the 56px top/bottom border.
        - Tablet (md): px-28 (112px) clears the 98px side border; py-20 (80px) clears the 72px top/bottom border.
        - Desktop (lg): px-36 (144px) clears the 120px side border; py-28 (112px) clears the 90px top/bottom border.
      */}
      <main className="flex-1 px-6 sm:px-12 md:px-20 lg:px-32 py-24 sm:py-28 md:py-32 lg:py-36 max-w-3xl mx-auto w-full flex flex-col items-center justify-start text-center relative z-10 font-[family-name:var(--font-cormorant),serif]">
        {/* Top Logo / Monogram */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
          <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 aspect-[581/565]">
            <Image
              src="/pd-logo.png"
              alt="Pulith & Dinithi Monogram"
              width={581}
              height={565}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Invitation Text Section */}
        <div className="w-full max-w-xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 text-[#3a2d27]">
          {/* Opening Line */}
          <p className="text-sm sm:text-base md:text-lg italic font-light tracking-wide text-[#705c52]">
            with hearts full of love and warmth,
          </p>

          {/* Parents 1 */}
          <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wider text-[#2d221e] leading-snug">
            Mr. Chiththananda &amp; Mrs. Nalini Mirihana
          </p>

          {/* Connector */}
          <p className="text-xs sm:text-sm md:text-base font-normal italic tracking-widest text-[#8a7569]">
            together with
          </p>

          {/* Parents 2 */}
          <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#2d221e] leading-snug">
            Mr. Neel Athukorala &amp; Mrs. Manel Jayawardena
          </p>

          {/* Invitation Line */}
          <p className="text-sm sm:text-base md:text-lg font-normal tracking-wide text-[#705c52] pt-2">
            invite you to celebrate the marriage of
          </p>

          {/* Couple's Names */}
          <div className="pt-3 sm:pt-4 md:pt-6">
            <h1
              style={{ fontFamily: "var(--font-purgatory), 'Purgatory', cursive" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#ba8d53] leading-tight"
            >
              Pulith &amp; Dinithi
            </h1>
          </div>

          {/* Date & Time Bar (1 row, 3 columns with fading vertical dividers) */}
          <div className="pt-6 sm:pt-8 md:pt-10 pb-2 w-full flex items-center justify-center">
            <div className="flex items-center justify-center text-[#4a3b32]">
              {/* Column 1: Day */}
              <div className="text-center px-3 sm:px-5 md:px-7">
                <span className="text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase font-medium">
                  Wednesday
                </span>
              </div>

              {/* Fading Divider 1 */}
              <div
                className="w-[1px] self-stretch min-h-[48px] bg-gradient-to-b from-transparent via-[#ba8d53]/60 to-transparent shrink-0"
                aria-hidden="true"
              />

              {/* Column 2: Date in 3 Rows */}
              <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 leading-tight">
                <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#705c52]">
                  October
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2d221e] my-0.5 sm:my-1">
                  21
                </span>
                <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#705c52]">
                  2026
                </span>
              </div>

              {/* Fading Divider 2 */}
              <div
                className="w-[1px] self-stretch min-h-[48px] bg-gradient-to-b from-transparent via-[#ba8d53]/60 to-transparent shrink-0"
                aria-hidden="true"
              />

              {/* Column 3: Time */}
              <div className="text-center px-3 sm:px-5 md:px-7">
                <span className="text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase font-medium">
                  9 AM
                </span>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="pt-6 sm:pt-8 md:pt-10 flex flex-col items-center justify-center space-y-1 text-center">
            {/* Golden Outline Location Icon */}
            <div className="flex items-center justify-center mb-1 text-[#ba8d53]">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wider text-[#2d221e]">
              The Grand Ballroom
            </p>
            <p className="text-sm sm:text-base md:text-lg font-light tracking-wide text-[#705c52]">
              Cinnamon Bentota Beach
            </p>
          </div>

          {/* The Venue Card Section */}
          <div className="pt-8 sm:pt-10 md:pt-12 pb-6 w-full">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-5 sm:mb-6">
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-[#ba8d53]">
                The Venue
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent mt-2" />
            </div>

            {/* Venue Card */}
            <div className="group relative bg-[#ffffff]/75 backdrop-blur-xs border border-[#ecdccf] rounded-2xl p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(75,50,35,0.08)]">
              {/* Hotel Architectural Illustration */}
              <div className="relative w-full aspect-[2400/1792] overflow-hidden rounded-xl bg-[#faf6f0] border border-[#f2e9e1]">
                <Image
                  src="/hotel.png"
                  alt="Cinnamon Bentota Beach"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 550px, 600px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Venue Card Content */}
              <div className="pt-4 sm:pt-5 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-[#2d221e]">
                  Cinnamon Bentota Beach
                </h3>
                <p className="text-xs sm:text-sm tracking-widest uppercase font-light text-[#7c685d] mt-1">
                  Bentota, Sri Lanka
                </p>

                <div className="mt-3 sm:mt-4 flex justify-center">
                  <a
                    href="https://maps.google.com/?q=Cinnamon+Bentota+Beach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#ba8d53]/40 text-[#8c6536] text-xs sm:text-sm font-medium tracking-wide bg-[#fbf9f5]/80 hover:bg-[#ba8d53] hover:text-white transition-all duration-200"
                  >
                    <span>View on Google Maps</span>
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
