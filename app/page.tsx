"use client";

import React from "react";
import HeroMonogram from "./components/HeroMonogram";
import MainInvitation from "./components/MainInvitation";
import DateTimeBar from "./components/DateTimeBar";
import LoveStorySection from "./components/LoveStorySection";
import BallroomLocation from "./components/BallroomLocation";
import VenueCard from "./components/VenueCard";
import PoruwaCeremony from "./components/PoruwaCeremony";
import PersonalizedRSVP from "./components/PersonalizedRSVP";
import SaveTheDateCountdown from "./components/SaveTheDateCountdown";

export default function WeddingHomePage() {
  return (
    <div className="relative min-h-screen flex flex-col font-serif selection:bg-[#ecdccf] selection:text-[#412e27]">
      {/* Fixed 9-slice Beeralu viewport border overlay */}
      <div className="website-frame" aria-hidden="true" />

      {/* Main Content Container with Safe Padding Buffer */}
      <main className="flex-1 px-6 sm:px-12 md:px-20 lg:px-32 py-24 sm:py-28 md:py-32 lg:py-36 max-w-3xl mx-auto w-full flex flex-col items-center justify-start text-center relative z-10 font-[family-name:var(--font-cormorant),serif]">
        {/* 1. Top Logo / Monogram */}
        <HeroMonogram />

        {/* 2. Invitation Flow */}
        <div className="w-full max-w-xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 text-[#3a2d27]">
          {/* Main Invitation Text (Hosts & Couple's Names) */}
          <MainInvitation />

          {/* Date & Time Bar */}
          <DateTimeBar />

          {/* Romantic Interlude */}
          <LoveStorySection />

          {/* Ballroom Location Header */}
          <BallroomLocation />

          {/* The Venue Card */}
          <VenueCard />

          {/* Poruwa Ceremony Card */}
          <PoruwaCeremony />

          {/* Personalized Guest Invitation & RSVP Section (URL Param Controlled) */}
          <PersonalizedRSVP />

          {/* Save The Date & Countdown Section */}
          <SaveTheDateCountdown />
        </div>
      </main>
    </div>
  );
}
