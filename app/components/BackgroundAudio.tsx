"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Music } from "lucide-react";

interface BackgroundAudioProps {
  shouldPlay?: boolean;
}

const TARGET_VOLUME = 0.35; // Gentle 35% background volume for ambient elegance on desktop/Android

function getInitialMutedState(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem("wedding_music_muted") === "true";
  } catch {
    return false;
  }
}

export default function BackgroundAudio({ shouldPlay }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(getInitialMutedState);

  // Initialize audio element settings on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const initialMuted = getInitialMutedState();
    audio.muted = initialMuted;
    try {
      audio.volume = TARGET_VOLUME;
    } catch {
      // iOS WebKit disables setting audio.volume; ignore
    }
  }, []);

  // Safe play audio with browser policy handling
  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if user previously explicitly muted in this session
    try {
      const savedMute = sessionStorage.getItem("wedding_music_muted");
      if (savedMute === "true") {
        return;
      }
    } catch {
      // ignore storage errors
    }

    // Exclusively use audio.muted for iOS WebKit compatibility
    audio.muted = false;
    try {
      audio.volume = TARGET_VOLUME;
    } catch {
      // iOS WebKit disables setting audio.volume; ignore
    }

    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch((err) => {
            // Autoplay blocked by browser policy; silently wait for user gesture
            console.debug("Audio autoplay waiting for user interaction:", err?.name);
          });
      }
    }
  }, []);

  // Handle explicit user toggle (mute / unmute)
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const isActivelyPlaying = !audio.paused && !audio.muted && !isMuted;

    if (isActivelyPlaying) {
      // User clicked Mute: exclusively set audio.muted and pause (iOS WebKit compatible)
      audio.muted = true;
      audio.pause();
      setIsMuted(true);
      setIsPlaying(false);
      try {
        sessionStorage.setItem("wedding_music_muted", "true");
      } catch {
        // ignore storage errors
      }
    } else {
      // User clicked Unmute / Play
      try {
        sessionStorage.setItem("wedding_music_muted", "false");
      } catch {
        // ignore storage errors
      }

      // Exclusively unmute via audio.muted
      audio.muted = false;
      setIsMuted(false);

      try {
        audio.volume = TARGET_VOLUME;
      } catch {
        // iOS WebKit disables setting audio.volume; ignore
      }

      // Explicitly trigger audio.play() on direct user interaction (unlocks iOS WebKit)
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.debug("Could not play background audio on interaction:", err);
            });
        }
      }
    }
  };

  // Trigger play when splash screen dismisses or shouldPlay becomes true
  useEffect(() => {
    if (shouldPlay) {
      playAudio();
    }
  }, [shouldPlay, playAudio]);

  // One-time fallback interaction listener for strict browser autoplay policies (including iOS Safari)
  useEffect(() => {
    const handleFirstInteraction = () => {
      try {
        const savedMute = sessionStorage.getItem("wedding_music_muted");
        if (savedMute !== "true" && audioRef.current && audioRef.current.paused) {
          playAudio();
        }
      } catch {
        if (audioRef.current && audioRef.current.paused) {
          playAudio();
        }
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return cleanupListeners;
  }, [playAudio]);

  // Page Visibility API: Pause when tab is hidden, resume when visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        if (!audio.paused) {
          audio.pause();
        }
      } else {
        try {
          const savedMute = sessionStorage.getItem("wedding_music_muted");
          if (savedMute !== "true" && !isMuted) {
            audio.muted = false;
            audio.play().catch(() => {});
          }
        } catch {
          if (!isMuted) {
            audio.muted = false;
            audio.play().catch(() => {});
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isMuted]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/golden-hour-violin.mp3"
        loop
        preload="auto"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Audio Mute / Unmute Button */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isPlaying && !isMuted ? "Mute background music" : "Play background music"}
        title={isPlaying && !isMuted ? "Mute background music" : "Play background music"}
        className="fixed bottom-[50px] right-[62px] sm:bottom-[98px] sm:right-[138px] md:bottom-[122px] md:right-[170px] z-40 group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#ffffff]/90 hover:bg-[#ffffff] backdrop-blur-md border border-[#ecdccf] hover:border-[#ba8d53]/50 shadow-[0_4px_18px_rgba(75,50,35,0.12)] hover:shadow-[0_6px_24px_rgba(75,50,35,0.18)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer select-none"
      >
        {/* Music Icon with Diagonal Strike-through when Muted */}
        <div className="relative flex items-center justify-center w-4 h-4">
          <Music
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 ${
              isPlaying && !isMuted ? "text-[#ba8d53]" : "text-[#9e8b80]"
            }`}
            strokeWidth={1.75}
            aria-hidden="true"
          />
          {(!isPlaying || isMuted) && (
            <span
              className="absolute w-4 sm:w-[18px] h-[1.5px] bg-[#9e8b80] -rotate-45 rounded-full"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Dynamic Equalizer Soundwave Bars (Active when playing) */}
        {isPlaying && !isMuted ? (
          <div
            className="flex items-center gap-[2px] h-3.5 px-0.5"
            aria-hidden="true"
          >
            <span className="w-[2px] bg-[#ba8d53] rounded-full animate-music-bar-1" />
            <span className="w-[2px] bg-[#ba8d53] rounded-full animate-music-bar-2" />
            <span className="w-[2px] bg-[#ba8d53] rounded-full animate-music-bar-3" />
          </div>
        ) : null}

        {/* Text Label */}
        <span
          className={`font-playfair text-[11px] sm:text-xs tracking-wider transition-colors duration-300 ${
            isPlaying && !isMuted
              ? "text-[#68625b] font-medium"
              : "text-[#9e8b80] font-normal"
          }`}
        >
          {isPlaying && !isMuted ? "Music" : "Muted"}
        </span>
      </button>
    </>
  );
}
