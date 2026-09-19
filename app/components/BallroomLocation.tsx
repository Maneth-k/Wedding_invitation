import React from "react";

export default function BallroomLocation() {
  return (
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
  );
}
