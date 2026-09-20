import React from "react";

export default function MainInvitation() {
  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
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
        <h1 className="couple-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Pulith &amp; Dinithi
        </h1>
      </div>
    </div>
  );
}
