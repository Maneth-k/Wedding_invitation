import React from "react";

export default function MainInvitation() {
  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {/* Opening Line */}
      <p className="text-sm sm:text-base md:text-lg italic font-light tracking-wide text-[#705c52]">
        with hearts full of love and warmth,
      </p>

      {/* Parents 1 */}
      <p className="font-playfair text-base sm:text-lg md:text-xl font-normal tracking-wide text-[#a0715b] leading-snug">
        <span className="block sm:inline">Mr. Chiththananda &amp;</span>
        <span className="block sm:inline">Mrs. Nalini Mirihana</span>
      </p>

      {/* Connector */}
      <p className="text-xs sm:text-sm md:text-base font-normal italic tracking-widest text-[#8a7569]">
        together with
      </p>

      {/* Parents 2 */}
      <p className="font-playfair text-base sm:text-lg md:text-xl font-normal tracking-wide text-[#a0715b] leading-snug">
        <span className="block sm:inline">Mr. Neel Athukorala &amp;</span>
        <span className="block sm:inline">Mrs. Manel Jayawardena</span>
      </p>

      {/* Invitation Line */}
      <p className="text-sm sm:text-base md:text-lg font-normal tracking-wide text-[#705c52] pt-2">
        invite you to celebrate the marriage of
      </p>

      {/* Couple's Names */}
      <div className="pt-3 sm:pt-4 md:pt-6 overflow-visible">
        <h1 className="couple-name text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Dinithi &amp; Pulith
        </h1>
      </div>
    </div>
  );
}
