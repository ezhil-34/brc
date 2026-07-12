import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 px-8 bg-transparent py-16"
    >
      {/* 1. HEADER PLACE AT THE TOP ABOVE EVERYTHING */}
      <div className="flex items-center justify-center gap-6 mb-16 w-full px-4">
        {/* Left Decorative Line */}
        <div className="h-[1px] w-24 bg-[#8b6508]/60 sm:w-32 md:w-40" />

        {/* Centered Text */}
        <h2 className="text-[#d4a017] font-serif text-sm tracking-[0.3em] font-medium whitespace-nowrap uppercase">
          About us
        </h2>

        {/* Right Decorative Line */}
        <div className="h-[1px] w-24 bg-[#8b6508]/60 sm:w-32 md:w-40" />
      </div>

      {/* 2. MAIN CONTENT GRID CONTAINER */}
      <div className="max-w-7xl grid lg:grid-cols-2 gap-14 items-center w-full">
        
        {/* Left side - glass quote card */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] px-10 py-14 md:px-14 md:py-16 overflow-hidden">
            {/* Top-left quote mark */}
            <svg
              className="absolute top-6 left-6 w-14 h-14 text-slate-400/40"
              fill="currentColor"
              viewBox="0 0 44 32"
            >
              <path d="M0 32V19.2C0 12.6 1.5 7.3 4.5 3.3 7.5 -0.7 11.9 -0.7 14 3.3 15.6 6.3 15.2 9.5 12.8 12.9 10.9 15.6 10 18 10 20.1H16V32H0ZM24 32V19.2C24 12.6 25.5 7.3 28.5 3.3 31.5 -0.7 35.9 -0.7 38 3.3 39.6 6.3 39.2 9.5 36.8 12.9 34.9 15.6 34 18 34 20.1H40V32H24Z" />
            </svg>

            {/* Bottom-right quote mark */}
            <svg
              className="absolute bottom-6 right-6 w-14 h-14 text-[#8b6508]/60 rotate-180"
              fill="currentColor"
              viewBox="0 0 44 32"
            >
              <path d="M0 32V19.2C0 12.6 1.5 7.3 4.5 3.3 7.5 -0.7 11.9 -0.7 14 3.3 15.6 6.3 15.2 9.5 12.8 12.9 10.9 15.6 10 18 10 20.1H16V32H0ZM24 32V19.2C24 12.6 25.5 7.3 28.5 3.3 31.5 -0.7 35.9 -0.7 38 3.3 39.6 6.3 39.2 9.5 36.8 12.9 34.9 15.6 34 18 34 20.1H40V32H24Z" />
            </svg>

            {/* Quote text */}
            <p className="relative font-serif italic text-white text-2xl md:text-3xl leading-relaxed text-center">
              "A reader lives a thousand lives before he dies. The man who
              never reads lives only one."
            </p>

            {/* Author */}
            <div className="relative flex items-center justify-center gap-4 mt-10">
              <span className="h-px w-10 bg-[#c99a1e]/60" />
              <span className="text-[#c99a1e] text-sm tracking-[0.25em] font-serif">
                GEORGE R. R. MARTIN
              </span>
              <span className="h-px w-10 bg-[#c99a1e]/60" />
            </div>
          </div>
        </div>

        {/* Right side - existing text */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          <h2 className="font-serif text-4xl font-bold text-[#d4a017] mb-6">
            About <span className="italic font-serif">BRC</span>
          </h2>
          <p className="text-slate-300 font-serif text-2xl leading-relaxed">
            The "Book Readers Club of Madras Institute of Technology" is a
            dynamic community dedicated to the joy of literature and vibrant
            discussions. It's a haven for passionate readers to connect,
            share, and explore the diverse realms of books. In the heart of
            MIT, this club transforms the love for reading into engaging
            conversations, creating an enriching environment for all book
            enthusiasts.
          </p>
        </div>

      </div>
    </section>
  );
}