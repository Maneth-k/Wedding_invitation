import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function VenueCard() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-12 pb-6 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-5 sm:mb-6">
        <span className="font-playfair-sc text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase font-medium text-[#ba8d53]">
          The Venue
        </span>
        <div className="gold-rule w-16 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent mt-2 sm:mt-2.5" />
      </div>

      {/* Venue Card */}
      <div className="group relative bg-[#ffffff]/75 backdrop-blur-xs border border-[#ecdccf] rounded-2xl p-3.5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(75,50,35,0.08)]">
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
        <div className="pt-3.5 sm:pt-5 text-center">
          <h3 className="font-playfair text-base sm:text-xl md:text-2xl font-semibold tracking-wider text-[#a0715b]">
            Cinnamon Bentota Beach
          </h3>
          <p className="font-playfair-sc text-[11px] sm:text-sm tracking-widest uppercase font-light text-[#7c685d] mt-1">
            Bentota, Sri Lanka
          </p>

          <div className="mt-3 sm:mt-4 flex justify-center">
            <a
              href="https://maps.google.com/?q=Cinnamon+Bentota+Beach"
              target="_blank"
              rel="noopener noreferrer"
              className="font-playfair inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#ba8d53]/40 text-[#8c6536] text-xs sm:text-sm font-medium tracking-wide bg-[#fbf9f5]/80 hover:bg-[#ba8d53] hover:text-white transition-all duration-200"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
