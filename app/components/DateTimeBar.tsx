import React from "react";

export default function DateTimeBar() {
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 pb-2 w-full flex items-center justify-center">
      <div className="flex items-center justify-center text-[#4a3b32]">
        {/* Column 1: Day */}
        <div className="text-center px-3 sm:px-5 md:px-7">
          <span className="font-playfair-sc text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase font-medium">
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
          <span className="font-playfair-sc text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#705c52]">
            October
          </span>
          <span className="font-numbers text-2xl sm:text-3xl md:text-4xl font-bold text-[#68625b] my-0.5 sm:my-1">
            21
          </span>
          <span className="font-numbers text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#68625b]">
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
          <span className="font-playfair-sc text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase font-medium">
            9 AM
          </span>
        </div>
      </div>
    </div>
  );
}
