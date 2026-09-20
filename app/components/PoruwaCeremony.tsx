import React from "react";
import { Clock, MapPin, Blend } from "lucide-react";

export default function PoruwaCeremony() {
  return (
    <div className="pt-4 sm:pt-6 md:pt-8 pb-6 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-5 sm:mb-6">
        <span className="text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase font-medium text-[#ba8d53]">
          The Ceremony
        </span>
        <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent mt-2 sm:mt-2.5" />
      </div>

      {/* Ceremony Card */}
      <div className="group relative bg-[#ffffff]/75 backdrop-blur-xs border border-[#ecdccf] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(75,50,35,0.08)] flex flex-col items-center text-center">
        {/* Decorative Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fbf9f5] border border-[#ba8d53]/30 flex items-center justify-center text-[#ba8d53] mb-4 shadow-[0_2px_10px_rgba(186,141,83,0.08)]">
          <Blend
            className="w-6 h-6 sm:w-7 sm:h-7 -rotate-135"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        {/* Ceremony Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider text-[#2d221e]">
          Poruwa Ceremony
        </h3>

        {/* Fading Gold Divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent my-3 sm:my-3.5" />

        {/* Time Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbf9f5] border border-[#ecdccf] text-[#8c6536] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
          <Clock
            className="w-3.5 h-3.5 text-[#ba8d53]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span>8.00 AM</span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-[#705c52] text-sm sm:text-base font-light tracking-wide">
          <MapPin
            className="w-4 h-4 text-[#ba8d53] shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span>Cinnamon Bentota Beach</span>
        </div>
      </div>
    </div>
  );
}
