"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Target Date: October 21, 2026 at 8:00 AM (Sri Lanka Time +05:30)
const TARGET_DATE = new Date("2026-10-21T08:00:00+05:30").getTime();

function calculateTimeLeft(): TimeLeft {
  const difference = TARGET_DATE - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function SaveTheDateCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
      {/* Main Card */}
      <div className="w-full relative bg-gradient-to-b from-[#ffffff]/95 via-[#fdfcf9]/90 to-[#faf7f2]/95 backdrop-blur-md border border-[#ba8d53]/35 rounded-t-[72px] rounded-b-[32px] sm:rounded-t-[120px] sm:rounded-b-[48px] md:rounded-t-[140px] md:rounded-b-[60px] px-4 xs:px-6 sm:px-10 md:px-12 lg:px-16 pt-7 sm:pt-10 md:pt-12 pb-8 sm:pb-12 md:pb-14 shadow-[0_10px_35px_rgba(75,50,35,0.06)] flex flex-col items-center text-center space-y-5 sm:space-y-7">
        {/* Perfectly Uniform Inner Border */}
        <div
          className="absolute top-[6px] left-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] sm:top-[10px] sm:left-[10px] sm:w-[calc(100%-20px)] sm:h-[calc(100%-20px)] md:top-[12px] md:left-[12px] md:w-[calc(100%-24px)] md:h-[calc(100%-24px)] border border-[#ba8d53]/35 rounded-t-[66px] rounded-b-[26px] sm:rounded-t-[110px] sm:rounded-b-[38px] md:rounded-t-[128px] md:rounded-b-[48px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Card Title: Save the Date */}
        <div className="flex flex-col items-center space-y-2 pt-1">
          <span className="font-playfair-sc text-xs sm:text-sm tracking-[0.28em] uppercase font-medium text-[#ba8d53]">
            Save the Date
          </span>
          <div className="gold-rule w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent" />
        </div>

        {/* Date: The Highlight of this Section */}
        <div className="space-y-2 sm:space-y-3">
          <h3 className="font-numbers text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] sm:tracking-[0.16em] text-[#68625b] leading-tight filter drop-shadow-xs">
            21.10.2026
          </h3>
          <p className="text-sm sm:text-base md:text-lg italic font-light tracking-wide text-[#705c52]">
            With love &amp; gratitude.
          </p>
        </div>

        {/* Countdown Display: Circular Days Counter */}
        <div className="w-full flex flex-col items-center justify-center gap-2.5 sm:gap-3 pt-1 pb-1">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-[#ffffff]/95 via-[#fcfaf6]/85 to-[#f7f2ea]/95 border border-[#ecdccf] shadow-[0_4px_16px_rgba(75,50,35,0.06)] backdrop-blur-xs flex items-center justify-center">
            <span className="font-numbers text-3xl sm:text-4xl md:text-5xl font-bold text-[#68625b] leading-none -translate-y-0.5 sm:-translate-y-0.5">
              {mounted ? timeLeft.days : "--"}
            </span>
          </div>
          <span className="font-playfair-sc text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8a7569] font-medium">
            Days To Go
          </span>
        </div>

        {/* Fading Gold Divider */}
        <div className="gold-rule w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent" />

        {/* Couple's Names in Cursive Script */}
        <div className="space-y-1">
          <h2 className="couple-name text-[42px] xs:text-5xl sm:text-5xl md:text-6xl font-bold leading-[1.15] sm:leading-tight">
            <span className="block sm:inline">Dinithi</span>{" "}
            <span className="inline-block sm:inline sm:mx-2.5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light my-0.5 sm:my-0">
              &amp;
            </span>{" "}
            <span className="block sm:inline">Pulith</span>
          </h2>
        </div>

        {/* Contact Call Buttons */}
        <div className="w-full pt-1 sm:pt-2 z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 md:gap-5 w-full">
            {/* Call Pulith */}
            <a
              href="tel:0788611499"
              className="w-full max-w-[200px] sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 md:px-10 py-2 sm:py-2 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fbf8f4] to-[#ebe1d3] text-[#3a2d27] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-pointer"
            >
              <Phone
                className="w-4 h-4 text-[#ba8d53] shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="font-playfair text-xs sm:text-sm font-medium tracking-wider">
                PULITH
              </span>
            </a>

            {/* Call Dinithi */}
            <a
              href="tel:0762506969"
              className="w-full max-w-[200px] sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 md:px-10 py-2 sm:py-2 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fbf8f4] to-[#ebe1d3] text-[#3a2d27] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-pointer"
            >
              <Phone
                className="w-4 h-4 text-[#ba8d53] shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="font-playfair text-xs sm:text-sm font-medium tracking-wider">
                DINITHI
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
