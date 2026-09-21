import React from "react";

export default function LoveStorySection() {
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
        <div className="gold-rule w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/50 to-transparent" />
        <span className="text-[#ba8d53] text-xs sm:text-sm">✦</span>
        <div className="gold-rule w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-[#ba8d53]/50 to-transparent" />
      </div>

      <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-medium tracking-wider text-[#a0715b]">
        A Lifetime in the Making
      </h2>

      <p className="mt-2 sm:mt-2.5 text-sm sm:text-base md:text-lg italic font-light tracking-wide text-[#705c52] max-w-md mx-auto leading-relaxed">
        With love, gratitude, and our families by our side, we step into forever.
      </p>
    </div>
  );
}
