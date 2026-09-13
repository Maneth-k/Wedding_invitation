"use client";

import React, { useState } from "react";

export default function WeddingHomePage() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpName, setRsvpName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "regrets">("attending");
  const [guestCount, setGuestCount] = useState("1");
  const [dietary, setDietary] = useState("");

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rsvpName.trim()) {
      setRsvpSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-serif selection:bg-[#ecdccf] selection:text-[#412e27]">
      {/* 
        Safe padding to ensure website content flows comfortably inside 
        the fixed 44px 9-slice Beeralu viewport frame
      */}
      <main className="flex-1 px-8 sm:px-14 md:px-20 lg:px-28 py-16 md:py-24 max-w-5xl mx-auto w-full">
        {/* --- SECTION 1: HERO & SAVE THE DATE --- */}
        <section className="min-h-[75vh] flex flex-col items-center justify-center text-center py-10">
          {/* Top emblem monogram */}
          <div className="mb-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[#8c6d58]/40 flex items-center justify-center bg-[#f5ede4]/80 shadow-xs mb-3">
              <span className="text-xl tracking-[0.2em] font-light text-[#6e513f] pl-1">
                A&amp;Y
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8c6d58] font-sans font-medium">
              Save The Date
            </p>
            <div className="w-12 h-[1px] bg-[#8c6d58]/30 mt-2" />
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#786154] font-sans mb-5">
            Together with their families
          </p>

          {/* Couple's Names */}
          <div className="space-y-2 mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#2d221e] tracking-tight">
              Ayya
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="w-12 h-[0.5px] bg-[#c2aba0]" />
              <span className="text-2xl sm:text-3xl italic text-[#9b7b65] font-serif">and</span>
              <div className="w-12 h-[0.5px] bg-[#c2aba0]" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#2d221e] tracking-tight">
              Partner
            </h1>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#614e45] leading-relaxed font-sans font-light mb-8">
            Request the honour of your presence to celebrate their wedding ceremony and reception.
          </p>

          {/* Date & Location Pill */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-[#f4ebe1]/90 border border-[#e1d2c6] px-8 py-4 rounded-2xl shadow-xs mb-10">
            <div className="text-center sm:text-left">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#8c6d58] font-sans font-semibold">
                Date &amp; Time
              </p>
              <p className="text-base text-[#382b26] font-medium font-sans">
                Saturday, October 24, 2026
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-[#d8c3b4]" />
            <div className="text-center sm:text-left">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#8c6d58] font-sans font-semibold">
                Venue
              </p>
              <p className="text-base text-[#382b26] font-medium font-sans">
                The Grand Pavilion, Heritage Estate
              </p>
            </div>
          </div>

          <a
            href="#rsvp"
            className="inline-block px-8 py-3 rounded-full bg-[#3d2f2b] text-[#faf6f0] text-xs font-sans uppercase tracking-[0.25em] hover:bg-[#5c473f] transition-all shadow-md hover:shadow-lg"
          >
            RSVP For The Celebration
          </a>
        </section>

        {/* --- SECTION 2: SCHEDULE OF EVENTS --- */}
        <section className="py-20 border-t border-[#e8dcd2]">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#8c6d58] font-sans font-semibold mb-2">
              Itinerary
            </p>
            <h2 className="text-3xl sm:text-4xl text-[#2d221e] font-light">
              The Wedding Schedule
            </h2>
            <div className="w-10 h-[1px] bg-[#8c6d58]/40 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-[#faf6f0] border border-[#ebdcd1] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#8c6d58] font-semibold block mb-2">
                03:30 PM
              </span>
              <h3 className="text-xl text-[#382b26] font-normal mb-2">Guest Arrival</h3>
              <p className="text-xs text-[#735e53] font-sans leading-relaxed">
                Welcome refreshments and live acoustic music at the Grand Terrace Gardens.
              </p>
            </div>

            {/* Event 2 */}
            <div className="bg-[#faf6f0] border border-[#ebdcd1] rounded-2xl p-6 text-center shadow-xs hover:shadow-md transition-shadow">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#8c6d58] font-semibold block mb-2">
                04:30 PM
              </span>
              <h3 className="text-xl text-[#382b26] font-normal mb-2">The Ceremony</h3>
              <p className="text-xs text-[#735e53] font-sans leading-relaxed">
                Exchange of sacred vows and blessings under the floral canopy archway.
              </p>
            </div>

            {/* Event 3 */}
            <div className="bg-[#faf6f0] border border-[#ebdcd1] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#8c6d58] font-semibold block mb-2">
                06:30 PM
              </span>
              <h3 className="text-xl text-[#382b26] font-normal mb-2">Reception &amp; Dinner</h3>
              <p className="text-xs text-[#735e53] font-sans leading-relaxed">
                Cocktail hour, speeches, multi-course feast, and dancing into the starry evening.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: VENUE & ACCOMMODATIONS --- */}
        <section className="py-16 border-t border-[#e8dcd2]">
          <div className="bg-[#f5ece2] rounded-3xl p-8 md:p-12 border border-[#e5d4c7] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8c6d58] font-sans font-semibold">
                Location Details
              </p>
              <h2 className="text-2xl sm:text-3xl text-[#2d221e]">The Grand Pavilion &amp; Lawn</h2>
              <p className="text-xs sm:text-sm text-[#665247] font-sans max-w-lg leading-relaxed">
                124 Heritage Gardens Way, Historic Valley. Valet parking will be provided at the main gate for all our guests.
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert("Venue map coordinates: 124 Heritage Gardens Way.")}
              className="px-6 py-3 rounded-full border border-[#8c6d58] text-[#4d3b32] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#8c6d58] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              Get Directions
            </button>
          </div>
        </section>

        {/* --- SECTION 4: RSVP FORM --- */}
        <section id="rsvp" className="py-20 border-t border-[#e8dcd2]">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8c6d58] font-sans font-semibold mb-2">
                Kindly Respond
              </p>
              <h2 className="text-3xl sm:text-4xl text-[#2d221e] font-light">RSVP Online</h2>
              <p className="text-xs text-[#7a6458] font-sans mt-2">
                Please let us know if you can make it by September 15, 2026.
              </p>
            </div>

            {rsvpSubmitted ? (
              <div className="bg-[#f5ece2] border border-[#debfae] rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#8c6d58] text-white flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h3 className="text-2xl text-[#2d221e]">Thank You, {rsvpName}!</h3>
                <p className="text-xs text-[#614d42] font-sans leading-relaxed max-w-sm mx-auto">
                  {attendance === "attending"
                    ? "We have recorded your RSVP and can't wait to celebrate this special day with you!"
                    : "We will miss you dearly, but thank you warmly for sending your kind wishes!"}
                </p>
                <button
                  type="button"
                  onClick={() => setRsvpSubmitted(false)}
                  className="text-xs text-[#8c6d58] underline font-sans cursor-pointer pt-2"
                >
                  Edit your response
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleRsvpSubmit}
                className="bg-white/80 backdrop-blur-xs border border-[#e5d8cc] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5 font-sans"
              >
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5c493f] mb-1.5">
                    Full Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="e.g. Eleanor & Thomas Vance"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#d6c4b8] bg-[#fbf9f6] text-sm text-[#382b26] focus:outline-hidden focus:border-[#8c6d58]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#5c493f] mb-1.5">
                    Will you be attending? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance("attending")}
                      className={`py-2.5 px-4 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        attendance === "attending"
                          ? "bg-[#3d2f2b] text-white border-[#3d2f2b]"
                          : "bg-[#fbf9f6] text-[#5c493f] border-[#d6c4b8] hover:bg-[#f2ebe2]"
                      }`}
                    >
                      Joyfully Accepts
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("regrets")}
                      className={`py-2.5 px-4 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        attendance === "regrets"
                          ? "bg-[#3d2f2b] text-white border-[#3d2f2b]"
                          : "bg-[#fbf9f6] text-[#5c493f] border-[#d6c4b8] hover:bg-[#f2ebe2]"
                      }`}
                    >
                      Regretfully Declines
                    </button>
                  </div>
                </div>

                {attendance === "attending" && (
                  <>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#5c493f] mb-1.5">
                        Total Number of Guests
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#d6c4b8] bg-[#fbf9f6] text-sm text-[#382b26] focus:outline-hidden focus:border-[#8c6d58]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#5c493f] mb-1.5">
                        Dietary Preferences or Allergies
                      </label>
                      <input
                        type="text"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        placeholder="e.g. Vegetarian, Gluten-Free, Vegan"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#d6c4b8] bg-[#fbf9f6] text-sm text-[#382b26] focus:outline-hidden focus:border-[#8c6d58]"
                      />
                    </div>
                  </>
                )}

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#3d2f2b] text-[#faf6f0] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#59443c] transition-colors cursor-pointer shadow-md"
                  >
                    Submit Response
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-12 pb-6 text-center text-xs text-[#8c7467] font-sans border-t border-[#e8dcd2]">
          <p className="font-serif italic text-sm text-[#5c473d] mb-2">
            With love, Ayya &amp; Partner
          </p>
          <p className="text-[11px] text-[#9c8475]">
            Framed with authentic Sri Lankan Beeralu Lace 9-Slice CSS Border (<code>border-image</code>, 44px, repeat: round).
          </p>
        </footer>
      </main>
    </div>
  );
}
