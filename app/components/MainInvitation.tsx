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
        <h1
          style={{ fontFamily: "var(--font-purgatory), 'Purgatory', cursive" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#ba8d53] leading-tight"
        >
          Pulith &amp; Dinithi
        </h1>
      </div>
    </div>
  );
}
