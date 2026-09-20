import React from "react";
import { MapPin } from "lucide-react";

export default function BallroomLocation() {
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 flex flex-col items-center justify-center space-y-1 text-center">
      {/* Golden Outline Location Icon */}
      <div className="flex items-center justify-center mb-1 text-[#ba8d53]">
        <MapPin
          className="w-5 h-5 sm:w-6 sm:h-6"
          strokeWidth={1.5}
          aria-hidden="true"
        />
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
