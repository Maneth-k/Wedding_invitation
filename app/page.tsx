"use client";

import React, { useState } from "react";
import HeroMonogram from "./components/HeroMonogram";
import MainInvitation from "./components/MainInvitation";
import DateTimeBar from "./components/DateTimeBar";
import LoveStorySection from "./components/LoveStorySection";
import BallroomLocation from "./components/BallroomLocation";
import VenueCard from "./components/VenueCard";
import PoruwaCeremony from "./components/PoruwaCeremony";
import PersonalizedRSVP from "./components/PersonalizedRSVP";
import SaveTheDateCountdown from "./components/SaveTheDateCountdown";
import SplashScreen from "./components/SplashScreen";
import BackgroundAudio from "./components/BackgroundAudio";

export default function WeddingHomePage() {
  const [startAudio, setStartAudio] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col font-serif selection:bg-[#ecdccf] selection:text-[#412e27]">
      {/* Sample Interactive Splash Screen */}
      <SplashScreen onOpen={() => setStartAudio(true)} />

      {/* Background Audio with Industry-Standard Autoplay & Floating Mute Button */}
      <BackgroundAudio shouldPlay={startAudio} />

      {/* Fixed 9-slice Beeralu viewport border overlay */}
      <div className="website-frame" aria-hidden="true" />

      {/* Main Content Container with Safe Padding Buffer */}
      <main className="flex-1 px-[62px] xs:px-[68px] sm:px-[76px] md:px-[145px] lg:px-[175px] py-20 sm:py-28 md:py-32 lg:py-36 max-w-4xl lg:max-w-5xl mx-auto w-full flex flex-col items-center justify-start text-center relative z-10 font-[family-name:var(--font-cormorant),serif]">
        {/* 1. Top Logo / Monogram */}
        <HeroMonogram />

        {/* 2. Invitation Flow */}
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 text-[#3a2d27]">
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
