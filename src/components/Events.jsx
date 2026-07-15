import React, { useState } from "react";

const books = [
  {
    categoryColor: "text-amber-300",
    accent: "#d4a017",
    // Warm clear tint vignette to blend beautifully with the nostalgic theme
    tint: "from-transparent via-black/10 to-black/85",
    title: "Among the Shelves",
    cover: "/assets/stall.jpeg", 
    description: "Discover stories waiting patiently to become part of your journey."
  },
  {
    categoryColor: "text-slate-300",
    accent: "#8b6508",
    tint: "from-transparent via-black/10 to-black/85",
    title: "Leave a Legacy",
    cover: "/assets/dd.jpeg",
    description: "Every donated book begins a new journey in someone else's hands."
  },
  {
    categoryColor: "text-rose-300",
    accent: "#c99a1e",
    tint: "from-transparent via-black/10 to-black/85",
    title: "Twilight Conversations",
    
    cover: "/assets/love.png",
    description: "As the evening settles, stories come alive through thoughtful conversation."
  },
  {
    categoryColor: "text-amber-300",
    accent: "#c99a1e",
    tint: "from-transparent via-black/10 to-black/85",
    title: "Borrow a Story",
    description: "Take home a book today and return with memories after a week.",
    cover: "/assets/dd.jpeg",
  },
  {
    categoryColor: "text-amber-300",
    accent: "#c99a1e",
    tint: "from-transparent via-black/10 to-black/85",
    title: "With Love ❤️",
    description: "Write to the one who made your campus days unforgettable—whether they knew it or not.",
    cover: "/assets/letter.png",
  },
];

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="events"
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 px-8 bg-transparent py-20"
    >
      {/* 1. SECTION DECORATIVE HEADER */}
      <div className="flex items-center justify-center gap-6 mb-12 w-full px-4">
        <div className="h-[1px] w-24 bg-[#8b6508]/40 sm:w-32 md:w-40" />
        <h2 className="text-[#d4a017]/80 font-serif text-xs tracking-[0.4em] font-medium whitespace-nowrap uppercase">
          Our Events
        </h2>
        <div className="h-[1px] w-24 bg-[#8b6508]/40 sm:w-32 md:w-40" />
      </div>

      {/* 2. INTRODUCTORY COPY CONTENT */}
      <div className="max-w-3xl text-center mb-16">
        <h2 className="font-cinzel text-4xl text-[#d4a017] mb-6 tracking-wide">
          MEMORIES IN THE <span className="italic font-serif font-light text-amber-100/90">Margins</span> 
        </h2>
        <p className="text-amber-100/70 font-serif text-lg leading-relaxed italic">
          Explore our calendar of elegant literary gatherings and curated discussions.
        </p>
      </div>

      {/* 3. FEATURED BOOKS GRID SCROLLABLE ROW */}
      <div className="w-full max-w-7xl mx-auto overflow-x-auto no-scrollbar">
        <div className="flex gap-8 w-max px-6 pb-12 pt-4">
          {books.map((book, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className={`w-[350px] shrink-0 p-2 rounded-[2rem] bg-gradient-to-b from-stone-900/40 to-black/60 backdrop-blur-2xl border transition-all duration-700 ease-out cursor-pointer select-none group
                  ${isActive 
                    ? "scale-105 shadow-[0_0_60px_rgba(212,160,23,0.22)] border-[#d4a017]/50 bg-stone-900/60" 
                    : "border-[#8b6508]/20 shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:border-[#d4a017]/40"
                  }`}
              >
                {/* Inner Card Container with Vintage Double-Border Detail */}
                <div className="relative rounded-2xl overflow-hidden border border-[#8b6508]/10 bg-transparent flex flex-col h-full">
                  
                  {/* FIXED IMAGE CONTAINER FOR REAL LANDSCAPE IMAGES */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      // Matches the nostalgic sepia filter adjustments from Team cards
                      className="absolute inset-0 w-full h-full object-cover object-center sepia-[0.25] contrast-[1.05] brightness-[0.95] transition-all duration-700 group-hover:sepia-0 group-hover:scale-103"
                    />
                    {/* Tint overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${book.tint}`} />
                    
                    {/* Gold accent line */}
                    <div
                      className="absolute top-4 right-4 bottom-4 w-[2px] rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: isActive ? "#d4a017" : book.accent, 
                        opacity: isActive ? 1 : 0.6 
                      }}
                    />

                    {/* Title / author overlay directly on top of image gradient */}
                    <div className="absolute bottom-4 left-5 right-6">
                      <h3 className="font-cinzel text-base text-amber-50 tracking-wide font-medium mb-1 transition-colors duration-500 group-hover:text-[#d4a017]">
                        {book.title}
                      </h3>
                    
                    </div>
                  </div>

                  {/* Footer Content */}
                  <div className="px-5 py-5 bg-transparent border-t border-[#8b6508]/10 flex-1 flex flex-col justify-between">
                    <p className="text-amber-100/60 font-serif text-xs leading-relaxed italic">
                      {book.description || "A beautiful gathering capturing moments shared between open books and community spirits."}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}