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
        <h1 className="couple-name text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.12] sm:leading-tight">
          <span className="block sm:inline">Dinithi</span>{" "}
          <span className="inline-block sm:inline sm:mx-3 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light my-0.5 sm:my-0">
            &amp;
          </span>{" "}
          <span className="block sm:inline name-pulith text-[1.09em] tracking-[0.01em]">Pulith</span>
        </h1>
      </div>
    </div>
  );
}
