"use client";

import React, { useState, useEffect } from "react";

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

  const formatUnit = (val: number) => String(val).padStart(2, "0");

  return (
    <div className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 w-full flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="flex flex-col items-center">
        <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-[#ba8d53]">
          Save the Date
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent mt-2" />
      </div>

      {/* Main Card */}
      <div className="w-full relative bg-gradient-to-b from-[#ffffff]/95 via-[#fdfcf9]/90 to-[#faf7f2]/95 backdrop-blur-md border border-[#ecdccf] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(75,50,35,0.06)] flex flex-col items-center text-center space-y-6 sm:space-y-7">
        
        {/* Date & Subtitle */}
        <div className="space-y-2">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.12em] text-[#2d221e]">
            21.10.2026
          </h3>
          <p className="text-base sm:text-lg italic font-light tracking-wide text-[#705c52]">
            With love &amp; gratitude.
          </p>
        </div>

        {/* Countdown Display: Clean 'Days To Go' layout */}
        <div className="w-full flex justify-center pt-1 pb-1">
          <div className="inline-flex flex-col items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl bg-[#fbf9f5] border border-[#ecdccf] shadow-2xs">
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#ba8d53] leading-none">
              {mounted ? timeLeft.days : "--"}
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#705c52] font-medium mt-2">
              Days To Go
            </span>
          </div>
        </div>

        {/* 
          Full Countdown Timer (Days, Hours, Mins, Secs) - Kept for reference
          <div className="w-full max-w-md pt-1 pb-1">
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
              <div className="bg-[#fbf9f5] border border-[#ecdccf] rounded-2xl p-2.5 sm:p-3.5 shadow-2xs flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2d221e] leading-none">
                  {mounted ? formatUnit(timeLeft.days) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8a7569] font-medium mt-1.5">
                  Days
                </span>
              </div>
              <div className="bg-[#fbf9f5] border border-[#ecdccf] rounded-2xl p-2.5 sm:p-3.5 shadow-2xs flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2d221e] leading-none">
                  {mounted ? formatUnit(timeLeft.hours) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8a7569] font-medium mt-1.5">
                  Hours
                </span>
              </div>
              <div className="bg-[#fbf9f5] border border-[#ecdccf] rounded-2xl p-2.5 sm:p-3.5 shadow-2xs flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2d221e] leading-none">
                  {mounted ? formatUnit(timeLeft.minutes) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8a7569] font-medium mt-1.5">
                  Mins
                </span>
              </div>
              <div className="bg-[#fbf9f5] border border-[#ecdccf] rounded-2xl p-2.5 sm:p-3.5 shadow-2xs flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ba8d53] leading-none">
                  {mounted ? formatUnit(timeLeft.seconds) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8a7569] font-medium mt-1.5">
                  Secs
                </span>
              </div>
            </div>
          </div>
        */}

        {/* Fading Gold Divider */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent" />

        {/* Couple's Names in Cursive Script */}
        <div className="space-y-1">
          <h2
            style={{ fontFamily: "var(--font-purgatory), 'Purgatory', cursive" }}
            className="text-3xl sm:text-4xl md:text-5xl text-[#ba8d53] font-normal leading-tight"
          >
            Pulith &amp; Dinithi
          </h2>
        </div>

        {/* Contact Call Buttons */}
        <div className="w-full pt-1">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {/* Call Pulith */}
            <a
              href="tel:0764655051"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#fbf9f5] border border-[#ba8d53]/40 text-[#3a2d27] hover:bg-[#ba8d53] hover:text-white transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-[#ba8d53] group-hover:text-white transition-colors shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium tracking-wider">
                Pulith
              </span>
            </a>

            {/* Call Dinithi */}
            <a
              href="tel:0762506969"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#fbf9f5] border border-[#ba8d53]/40 text-[#3a2d27] hover:bg-[#ba8d53] hover:text-white transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-[#ba8d53] group-hover:text-white transition-colors shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium tracking-wider">
                Dinithi
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
