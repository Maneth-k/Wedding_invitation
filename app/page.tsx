"use client";

import React from "react";

export default function WeddingHomePage() {
  return (
    <div className="relative min-h-screen flex flex-col font-serif selection:bg-[#ecdccf] selection:text-[#412e27]">
      {/* Fixed 9-slice Beeralu viewport border overlay */}
      <div className="website-frame" aria-hidden="true" />

      {/* 
        Safe padding buffer:
        - Mobile: px-20 (80px) clears the 76px side border; py-16 (64px) clears the 56px top/bottom border.
        - Tablet (md): px-28 (112px) clears the 98px side border; py-20 (80px) clears the 72px top/bottom border.
        - Desktop (lg): px-36 (144px) clears the 120px side border; py-28 (112px) clears the 90px top/bottom border.
      */}
      <main className="flex-1 px-20 md:px-28 lg:px-36 py-16 md:py-20 lg:py-28 max-w-4xl mx-auto w-full flex items-center justify-center">
        <div className="text-center py-24 space-y-4">
          <h1 className="text-3xl sm:text-4xl text-[#2d221e]">
            Beeralu Frame Overlay Active
          </h1>
          <p className="text-sm text-[#735e53] font-sans">
            Resize the window or inspect on mobile to verify corner aspect
            ratios and edge tiling.
          </p>
        </div>
      </main>
    </div>
  );
}
