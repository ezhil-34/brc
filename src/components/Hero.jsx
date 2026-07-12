import React from "react";
import { BookOpen, Star, ArrowRight, Sparkles, Feather } from "lucide-react";

import BOOK_IMAGE from "../assets/book.jpg"; 
import LOGO_IMAGE from "../assets/logo.png";

export default function Hero() {
  return (
    <div className="w-full">
      {/* Header containing branding and the centered glass nav */}
      <header className="relative z-20 mx-4 md:mx-12 pt-6 flex items-center justify-between gap-4">
        
        {/* Left Side: Branding */}
        <div className="flex items-center gap-3 py-4 min-w-[260px]">
          <img
            src={LOGO_IMAGE}
            alt="The Reader's Circle Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-white font-serif tracking-wide text-xl whitespace-nowrap">
            BOOK READER'S CLUB
          </span>
        </div>

        {/* Center/Right Side: Centered Navbar Card */}
        <div className="flex-1 flex justify-center lg:justify-start lg:pl-16">
          <nav className="w-full max-w-2xl rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] px-8 py-4">
            <div className="flex items-center justify-center gap-8 text-sm font-serif text-slate-200">
              <a href="#home" className="hover:text-[#d4a017] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#d4a017] transition-colors">About</a>
              <a href="#events" className="hover:text-[#d4a017] transition-colors">Events</a>
              <a href="#lending" className="hover:text-[#d4a017] transition-colors">Lending</a>
              <a href="#blog" className="hover:text-[#d4a017] transition-colors">Blog</a>
              <a href="#team" className="hover:text-[#d4a017] transition-colors">Our Team</a>
            </div>
          </nav>
        </div>

        <div className="hidden xl:block min-w-[260px]" />
      </header>

      {/* Hero content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-8 md:px-16 pt-14 pb-24 max-w-7xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 font-serif rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-[#d4a017] text-xs font-medium tracking-wide mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            A READING SOCIETY
          </div>

          <h1 className="font-serif text-white leading-[1.05] text-5xl md:text-6xl mb-8">
            DISCOVER<br />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e0b030] to-[#8b6508]">
              STORIES
            </span><br />
            THAT STAY<br />
            WITH YOU.
          </h1>

          <p className="text-slate-300 text-base font-serif leading-relaxed max-w-md mb-10">
            Join thousands of passionate readers discovering unforgettable
            books, sharing meaningful discussions, and building lifelong
            friendships through reading.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#lending" className="italic font-serif inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-b from-[#c99a1e] to-[#8b6508] text-slate-900 font-semibold shadow-[0_0_24px_rgba(139,101,8,0.5)] hover:brightness-105 transition">
              LEND A BOOK
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative p-3 rounded-[2rem] bg-white/[0.05] backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src={BOOK_IMAGE}
                alt="Books, glasses and coffee on a table"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute top-6 left-4 flex items-center gap-3 bg-white/[0.08] backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/15 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-[#8b6508]/20 border border-[#8b6508]/40 flex items-center justify-center">
                  <Feather className="w-4 h-4 text-[#d4a017]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">Now Reading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}