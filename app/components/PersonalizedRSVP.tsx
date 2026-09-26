"use client";
export const dynamic = "force-dynamic";
import React, { Suspense, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import { User, Check, SquarePen, Heart, X, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { submitRSVP } from "../actions/rsvp";

interface RSVPFormData {
  fullName: string;
  attending: "yes" | "no";
  dietary?: string;
  message?: string;
}

function getSavedRSVP(guestName: string): RSVPFormData | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem(`wedding_rsvp_${guestName}`);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // ignore localStorage errors
  }
  return null;
}

// 1. Inner form component: holds clean local state per guest
function RSVPContentInner({ guestName }: { guestName: string }) {
  const [savedData] = useState<RSVPFormData | null>(() => getSavedRSVP(guestName));
  const [fullName, setFullName] = useState(() => savedData?.fullName || guestName);
  const [attending, setAttending] = useState<"yes" | "no">(() => savedData?.attending || "yes");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dietary, setDietary] = useState(() => savedData?.dietary || "");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState(() => savedData?.message || "");
  const [isSubmitted, setIsSubmitted] = useState(() => !!savedData);
  const [submittedData, setSubmittedData] = useState<RSVPFormData | null>(() => savedData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);
    setIsSubmitting(true);

    const data: RSVPFormData = {
      fullName: fullName.trim() || guestName,
      attending,
      dietary,
      message,
    };

    try {
      const result = await submitRSVP(data);

      if (result.success) {
        try {
          localStorage.setItem(`wedding_rsvp_${guestName}`, JSON.stringify(data));
        } catch {
          // ignore localStorage error
        }

        setSubmittedData(data);
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.error || "Unable to record your RSVP right now. Please try again.");
      }
    } catch {
      setErrorMessage("An unexpected network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = () => {
    setErrorMessage(null);
    setIsSubmitted(false);
  };

  return (
    <div className="pt-8 sm:pt-10 md:pt-12 pb-8 w-full space-y-8 sm:space-y-10">
      {/* 1. Personalized Guest Invitation Card */}
      <div className="relative bg-[#ffffff]/85 backdrop-blur-xs border border-[#ecdccf] rounded-2xl p-4 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(75,50,35,0.08)] text-center">
        {/* Decorative Top Flourish */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
          <div className="gold-rule w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent" />
          <span className="text-[#ba8d53] text-xs sm:text-sm">✦</span>
          <div className="gold-rule w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-[#ba8d53]/60 to-transparent" />
        </div>

        {/* Opening Line */}
        <p className="text-sm sm:text-base md:text-lg italic font-light tracking-wide text-[#705c52]">
          With hearts full of love and warmth,
        </p>

        {/* Parents */}
        <div className="mt-3 sm:mt-4 space-y-1">
          <p className="font-playfair text-base sm:text-lg md:text-xl font-normal tracking-wide text-[#a0715b] leading-snug">
            <span className="block sm:inline">Mr. Chiththananda &amp;</span>
            <span className="block sm:inline">Mrs. Nalini Mirihana</span>
          </p>
          <p className="text-xs sm:text-sm italic tracking-widest text-[#8a7569]">
            together with
          </p>
          <p className="font-playfair text-base sm:text-lg md:text-xl font-normal tracking-wide text-[#a0715b] leading-snug">
            <span className="block sm:inline">Mr. Neel Athukorala &amp;</span>
            <span className="block sm:inline">Mrs. Manel Jayawardena</span>
          </p>
        </div>

        {/* Invitation connector */}
        <p className="font-playfair-sc text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-[#ba8d53] mt-4 sm:mt-5">
          cordially invite
        </p>

        {/* Guest Name(s) Highlight */}
        <div className="py-3 sm:py-4">
          <div className="inline-block relative">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal text-[#ba8d53] tracking-wide leading-tight px-4 py-1">
              {guestName}
            </h2>
            <div className="gold-rule w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/50 to-transparent mt-1" />
          </div>
        </div>

        {/* Invitation Goal */}
        <p className="text-sm sm:text-base md:text-lg font-light tracking-wide text-[#5c4a40] max-w-lg mx-auto leading-relaxed">
          to share in the joy of the Poruwa ceremony and wedding celebration of
        </p>

        {/* Couple's Names */}
        <div className="pt-2 sm:pt-3">
          <span className="couple-name text-[42px] xs:text-5xl sm:text-5xl md:text-6xl font-bold leading-[1.15] sm:leading-tight inline-block">
            <span className="block sm:inline">Dinithi</span>{" "}
            <span className="inline-block sm:inline sm:mx-2.5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light my-0.5 sm:my-0">
              &amp;
            </span>{" "}
            <span className="block sm:inline name-pulith text-[1.09em] tracking-[0.01em]">Pulith</span>
          </span>
        </div>
      </div>

      {/* 2. RSVP Form Section */}
      <div id="rsvp-section" className="w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-5 sm:mb-6 text-center">
          <span className="font-playfair-sc text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase font-medium text-[#ba8d53]">
            RSVP
          </span>
          <div className="gold-rule w-16 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ba8d53]/60 to-transparent mt-2 sm:mt-2.5" />
          <p className="text-xs sm:text-sm italic text-[#705c52] mt-2 font-light">
            Kindly respond by October 10, 2026
          </p>
        </div>

        {/* Form Card Container */}
        <div className="relative bg-gradient-to-b from-[#ffffff]/95 via-[#fdfcf9]/90 to-[#faf7f2]/95 backdrop-blur-md border border-[#ecdccf] rounded-3xl p-4 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(75,50,35,0.06)] transition-all duration-300">
          {isSubmitted && submittedData ? (
            /* Submission Confirmation State */
            <div className="text-center py-6 px-2 space-y-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#faf6f0] to-[#f4ede3] border border-[#ba8d53]/40 flex items-center justify-center text-[#ba8d53] mx-auto shadow-[0_4px_16px_rgba(186,141,83,0.15)]">
                <Check
                  className="w-8 h-8"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="font-playfair-sc text-xs uppercase tracking-[0.25em] text-[#ba8d53] font-medium">
                  RSVP Received
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-[#a0715b] tracking-wide">
                  Thank You, {submittedData.fullName}!
                </h3>
                <p className="text-sm sm:text-base text-[#705c52] font-light leading-relaxed">
                  {submittedData.attending === "yes" ? (
                    <>
                      We are delighted to confirm your attendance. We cannot wait to celebrate this momentous day together!
                    </>
                  ) : (
                    <>
                      Thank you for letting us know. You will be warmly remembered and dearly missed as we celebrate our marriage.
                    </>
                  )}
                </p>
              </div>

              <div className="pt-3 flex justify-center">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#ba8d53]/30 text-xs sm:text-sm text-[#8c6536] hover:bg-[#faf6f0] transition-colors font-medium cursor-pointer"
                >
                  <SquarePen
                    className="w-3.5 h-3.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>Edit Response</span>
                </button>
              </div>
            </div>
          ) : (
            /* Elevated RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 text-left">
              {/* 1. Full Name Input (Stationery Style) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-[0.18em] font-medium text-[#5a483e]"
                  >
                    Guest of Honour
                  </label>
                  <span className="text-[11px] text-[#ba8d53] tracking-wide font-light">
                    Pre-filled for you
                  </span>
                </div>

                <div className="relative group">
                  <input
                    id="fullName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Mr. & Mrs. Perera"
                    className="w-full px-4 py-3 pl-11 rounded-xl bg-[#fcfaf7] border border-[#e5d6c8] text-[#2d221e] text-sm sm:text-base font-medium placeholder:text-[#9e8b80] focus:outline-hidden focus:border-[#ba8d53] focus:ring-2 focus:ring-[#ba8d53]/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-2xs"
                  />
                  {/* Decorative Icon */}
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ba8d53]">
                    <User
                      className="w-4 h-4"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Attendance Selection Cards */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.18em] font-medium text-[#5a483e]">
                  Will You Be Attending?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Joyfully Accept Card */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setAttending("yes")}
                    className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 disabled:cursor-not-allowed cursor-pointer flex flex-col justify-between ${
                      attending === "yes"
                        ? "bg-[#faf6f0] border-[#ba8d53] shadow-[0_4px_20px_rgba(186,141,83,0.12)] ring-1 ring-[#ba8d53]/30"
                        : "bg-[#fdfbf7]/60 border-[#ecdccf] hover:border-[#ba8d53]/40 hover:bg-[#faf7f2]/50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#ecdccf] flex items-center justify-center text-[#ba8d53] mb-2.5 shadow-2xs">
                        <Heart
                          className="w-4 h-4"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Radio Indicator */}
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          attending === "yes"
                            ? "border-[#ba8d53] bg-[#ba8d53]"
                            : "border-[#ba8d53]/40 bg-white"
                        }`}
                      >
                        {attending === "yes" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="font-playfair text-sm sm:text-base font-semibold text-[#a0715b] tracking-wide">
                        Joyfully Accepts
                      </p>
                      <p className="text-xs text-[#705c52] font-light mt-0.5">
                        Can&apos;t wait to celebrate with you
                      </p>
                    </div>
                  </button>

                  {/* Regretfully Decline Card */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setAttending("no")}
                    className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 disabled:cursor-not-allowed cursor-pointer flex flex-col justify-between ${
                      attending === "no"
                        ? "bg-[#faf6f0] border-[#ba8d53] shadow-[0_4px_20px_rgba(186,141,83,0.12)] ring-1 ring-[#ba8d53]/30"
                        : "bg-[#fdfbf7]/60 border-[#ecdccf] hover:border-[#ba8d53]/40 hover:bg-[#faf7f2]/50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#ecdccf] flex items-center justify-center text-[#8c766b] mb-2.5 shadow-2xs">
                        <X
                          className="w-4 h-4"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Radio Indicator */}
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          attending === "no"
                            ? "border-[#ba8d53] bg-[#ba8d53]"
                            : "border-[#ba8d53]/40 bg-white"
                        }`}
                      >
                        {attending === "no" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="font-playfair text-sm sm:text-base font-semibold text-[#a0715b] tracking-wide">
                        Regretfully Declines
                      </p>
                      <p className="text-xs text-[#705c52] font-light mt-0.5">
                        Will be celebrating in spirit
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* 
                Dietary Preferences (Commented out for now as requested)
                <div>
                  <label
                    htmlFor="dietary"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-medium text-[#4a3b32] mb-1.5"
                  >
                    Dietary Preferences / Notes (Optional)
                  </label>
                  <input
                    id="dietary"
                    type="text"
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder="e.g. Vegetarian, Halal, Nut Allergy, etc."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#fbf9f5]/80 border border-[#ecdccf] text-[#2d221e] text-sm sm:text-base focus:outline-hidden focus:border-[#ba8d53] focus:ring-1 focus:ring-[#ba8d53] transition-all"
                  />
                </div>
              */}

              {/* 
                Warm Wishes for the Couple (Commented out for now as requested)
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-medium text-[#4a3b32] mb-1.5"
                  >
                    Warm Wishes for the Couple (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a heartfelt blessing or message for Dinithi & Pulith..."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#fbf9f5]/80 border border-[#ecdccf] text-[#2d221e] text-sm sm:text-base focus:outline-hidden focus:border-[#ba8d53] focus:ring-1 focus:ring-[#ba8d53] transition-all resize-none"
                  />
                </div>
              */}

              {/* Error Message Feedback */}
              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#fdf2f2] border border-[#f5c6cb] text-[#842029] text-xs sm:text-sm leading-relaxed"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-[#842029] mt-0.5" aria-hidden="true" />
                  <span className="font-normal">{errorMessage}</span>
                </div>
              )}

              {/* 4. Submit Button */}
              <div className="pt-3 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[220px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ba8d53] via-[#c2965d] to-[#ba8d53] hover:from-[#aa7e46] hover:to-[#a0743e] disabled:opacity-75 disabled:cursor-not-allowed text-white font-medium text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_6px_20px_rgba(186,141,83,0.25)] hover:shadow-[0_8px_26px_rgba(186,141,83,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:transform-none cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" aria-hidden="true" />
                      <span className="font-playfair font-medium">Recording RSVP...</span>
                    </>
                  ) : (
                    <>
                      <span className="font-playfair font-medium">Confirm Response</span>
                      <ArrowRight
                        className="w-4 h-4"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const emptySubscribe = () => () => {};

// 2. Controller component: decodes the search parameter and handles hydration
function PersonalizedRSVPContent() {
  const searchParams = useSearchParams();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const rawName = searchParams.get("name");

  let guestName = "";
  if (rawName) {
    try {
      // Convert + to space, then decodeURIComponent
      guestName = decodeURIComponent(rawName.replace(/\+/g, " ")).trim();
    } catch {
      guestName = rawName.replace(/\+/g, " ").trim();
    }
  }

  // Graceful Fallback: If no name param is present or not mounted, this section is not visible
  if (!mounted || !guestName) {
    return null;
  }

  // Key prop guarantees a fresh mount whenever guestName changes
  return <RSVPContentInner key={guestName} guestName={guestName} />;
}

export default function PersonalizedRSVP() {
  return (
    <Suspense fallback={null}>
      <PersonalizedRSVPContent />
    </Suspense>
  );
}
