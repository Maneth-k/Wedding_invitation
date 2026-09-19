import React from "react";
import Image from "next/image";

export default function VenueCard() {
  return (
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
  );
}
