import React from "react";
import Image from "next/image";

export default function HeroMonogram() {
  return (
    <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
      <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 aspect-[581/565]">
        <Image
          src="/pd-logo.png"
          alt="Dinithi & Pulith Monogram"
          width={581}
          height={565}
          priority
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
