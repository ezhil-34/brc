import React from "react";

const teamMembers = [
  {
    name: "Mouneeswaran ",
    designation: "Chairman",
    department: "AI&DS",
    avatar: "/assets/team1.jpeg", 
  },
  {
    name: "Raveena",
    designation: "Vice Chairman",
    department: "CT",
    avatar: "/assets/team2.jpeg",
  },
  {
    name: "Deeksha Lakshana K",
    designation: "Event Coordinator",
    department: "AI&DS",
    avatar: "/assets/team3.jpeg",
  },
  {
    name: "Srinithi A",
    designation: "Event Lead",
    department: "ECE",
    avatar: "/assets/team4.jpeg",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 px-8 bg-transparent py-16"
    >
      {/* 1. HEADER PLACE AT THE TOP ABOVE EVERYTHING */}
      <div className="flex items-center justify-center gap-6 mb-16 w-full px-4">
        {/* Left Decorative Line */}
        <div className="h-[1px] w-24 bg-[#8b6508]/40 sm:w-32 md:w-40" />

        {/* Centered Text */}
        <h2 className="text-[#d4a017]/80 font-serif text-xs tracking-[0.4em] font-medium whitespace-nowrap uppercase">
          About us
        </h2>

        {/* Right Decorative Line */}
        <div className="h-[1px] w-24 bg-[#8b6508]/40 sm:w-32 md:w-40" />
      </div>

      <div className="max-w-3xl text-center mb-20">
        <h2 className="font-cinzel text-4xl text-[#d4a017] tracking-wider mb-6">
          BEHIND OUR <span className="italic font-serif font-light text-amber-100/90">Chapter</span>
        </h2>
        <p className="text-amber-100/70 font-serif text-lg leading-relaxed italic">
          Meet the passionate souls who bring this literary haven to life.
        </p>
      </div>

      {/* 2. NOSTALGIC TEAM MEMBERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-4">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-2 rounded-[2rem] bg-gradient-to-b from-stone-900/40 to-black/60 backdrop-blur-2xl border border-[#8b6508]/20 shadow-[0_30px_70px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#d4a017]/40 group"
          >
            {/* Inner Container with Vintage Double-Border Detail */}
            <div className="relative rounded-2xl p-6 border border-[#8b6508]/10 bg-transparent flex flex-col items-center h-full w-full">
              
              {/* Profile Image with Classic Sepia/Warm Filter */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 p-1 bg-gradient-to-b from-[#d4a017]/30 to-transparent shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    // "sepia-[0.25] contrast-[1.05]" gives it an archival, timeless photo quality
                    className="absolute inset-0 w-full h-full object-cover object-center sepia-[0.25] contrast-[1.05] brightness-[0.95] transition-all duration-700 group-hover:sepia-0 group-hover:scale-105"
                  />
                  {/* Subtle vignette layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
                </div>
              </div>

              {/* Typography Structure */}
              <div className="flex-1 flex flex-col justify-center text-center">
                <h3 className="font-cinzel text-base text-amber-50 tracking-wide font-medium mb-1.5 transition-colors duration-500 group-hover:text-[#d4a017]">
                  {member.name}
                </h3>
                <div className="w-8 h-[1px] bg-[#8b6508]/40 mx-auto mb-2.5" />
                <p className="text-[#d4a017] font-serif text-[11px] uppercase tracking-[0.15em] font-medium mb-0.5">
                  {member.designation}
                </p>
                <p className="text-amber-100/50 font-serif text-xs italic">
                  {member.department}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}