import React, { useState } from "react";
import { Feather } from "lucide-react";

const books = [
  {
    categoryColor: "text-slate-300",
    accent: "#8b6508",
    tint: "from-[#1b2740]/60 to-[#0d1420]/90",
    title: "Among the Shelves",
    cover: "/images/books/silent-library.jpg",
    discription:"Discover stories waiting patiently to become part of your journey.",
  },
  {
    categoryColor: "text-rose-300",
    accent: "#c99a1e",
    tint: "from-[#3a1620]/60 to-[#1a0b10]/90",
    title: "Leave a Legacy",
    discription:"Every donated book begins a new journey in someone else's hands.",
    cover: "../assets/dd.jpeg",
  },
  {
    categoryColor: "text-purple-300",
    accent: "#c99a1e",
    tint: "from-[#2c1638]/60 to-[#140a1c]/90",
    title: "Twilight Conversations",
    discription:"As the evening settles, stories come alive through thoughtful conversation.",
    cover: "/images/books/beyond-the-veil.jpg",
  },
  {
    categoryColor: "text-amber-300",
    accent: "#c99a1e",
    tint: "from-[#3a2b10]/60 to-[#1c1408]/90",
    title: "Borrow a Story",
    discription:"Take home a book today and return with memories after a week.",
    cover: "/images/books/the-cartographer.jpg",
  },
];

export default function Events() {
  // Track which card is clicked/active
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="events"
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 px-8 bg-transparent py-20"
    >
      {/* 1. SECTION DECORATIVE HEADER */}
      <div className="flex items-center justify-center gap-6 mb-12 w-full px-4">
        <div className="h-[1px] w-24 bg-[#8b6508]/60 sm:w-32 md:w-40" />
        <h2 className="text-[#d4a017] font-serif text-sm tracking-[0.3em] font-medium whitespace-nowrap uppercase">
          Our Events
        </h2>
        <div className="h-[1px] w-24 bg-[#8b6508]/60 sm:w-32 md:w-40" />
      </div>

      {/* 2. INTRODUCTORY COPY CONTENT */}
      <div className="max-w-3xl text-center mb-16">
        <h2 className="font-cinzel text-4xl text-[#d4a017] mb-6 tracking-wide">
          MEMORIES IN THE MARGINS
        </h2>
        <p className="font-serif text-slate-300 text-lg leading-relaxed">
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
                className={`w-[320px] shrink-0 p-3 rounded-[2rem]  backdrop-blur-2xl border transition-all duration-500 ease-out cursor-pointer select-none
                  ${isActive 
                    ? "scale-105  border-[#d4a017]/50 bg-white/[0.07]" 
                    : "border-white/10 hover:bg-white/[0.06] hover:scale-[1.02] hover:border-[#d4a017]/30"
                  }`}
              >
                {/* Inner Card Container */}
                <div className="relative rounded-2xl overflow-hidden  border border-white/10 flex flex-col h-full">
                  
                  {/* Cover image area */}
                  <div className="relative h-[320px]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Tint overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${book.tint}`} />
                    
                    {/* Gold accent line */}
                    <div
                      className="absolute top-6 right-6 bottom-6 w-[3px] rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: isActive ? "#d4a017" : book.accent, 
                        opacity: isActive ? 1 : 0.8 
                      }}
                    />

                    {/* Title / author overlay */}
                    <div className="absolute bottom-5 left-6 right-8">
                      <h3 className="font-serif text-xl text-white leading-tight mb-1">
                        {book.title}
                      </h3>
                      <p className="text-slate-300 text-sm">{book.author}</p>
                    </div>
                  </div>

                  {/* Footer Content */}
                  <div className="px-6 py-5 bg-white/[0.06] border-t border-white/5 flex-1">
                    <p className="text-slate-400 text-sm leading-relaxed font-serif">
                        {book.discription}
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