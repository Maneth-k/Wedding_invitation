import React from "react";

export default function PoruwaCeremony() {
  return (
    <div className="pt-4 sm:pt-6 md:pt-8 pb-6 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-5 sm:mb-6">
        <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-[#ba8d53]">
          The Ceremony
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent mt-2" />
      </div>

      {/* Ceremony Card */}
      <div className="group relative bg-[#ffffff]/75 backdrop-blur-xs border border-[#ecdccf] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(75,50,35,0.08)] flex flex-col items-center text-center">
        {/* Decorative Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fbf9f5] border border-[#ba8d53]/30 flex items-center justify-center text-[#ba8d53] mb-4 shadow-[0_2px_10px_rgba(186,141,83,0.08)]">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3c-1.5 3-3.5 5.5-6 6.5 2.5 1 4.5 3.5 6 6.5 1.5-3 3.5-5.5 6-6.5-2.5-1-4.5-3.5-6-6.5z" />
            <path d="M12 16c-2 1.5-4.5 2-7 2 2-1 3.5-2.5 4.5-4.5" />
            <path d="M12 16c2 1.5 4.5 2 7 2-2-1-3.5-2.5-4.5-4.5" />
          </svg>
        </div>

        {/* Ceremony Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider text-[#2d221e]">
          Poruwa Ceremony
        </h3>

        {/* Fading Gold Divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent my-3 sm:my-3.5" />

        {/* Time Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbf9f5] border border-[#ecdccf] text-[#8c6536] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
          <svg
            className="w-3.5 h-3.5 text-[#ba8d53]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>8.00 AM</span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-[#705c52] text-sm sm:text-base font-light tracking-wide">
          <svg
            className="w-4 h-4 text-[#ba8d53] shrink-0"
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
          <span>Cinnamon Bentota Beach</span>
        </div>
      </div>
    </div>
  );
}
