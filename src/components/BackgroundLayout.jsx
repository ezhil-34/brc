import React from "react";

export default function BackgroundLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#131f34] text-white relative">
      {/* GLOBAL FIXED LAYERS — They sit perfectly behind all scrolled content */}
      
      {/* Ambient gold glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full bg-[#8b6508]/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full bg-[#a67c0a]/15 blur-[120px]" />
      </div>

      {/* Decorative scattered dots */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="absolute top-[10%] left-[6%] w-1.5 h-1.5 rounded-full bg-[#c99a1e]/60" />
        <span className="absolute top-[42%] left-[2%] w-1 h-1 rounded-full bg-[#c99a1e]/50" />
        <span className="absolute bottom-[18%] left-[14%] w-1 h-1 rounded-full bg-[#c99a1e]/40" />
        <span className="absolute top-[14%] right-[22%] w-1 h-1 rounded-full bg-[#c99a1e]/50" />
        <span className="absolute bottom-[10%] left-[42%] w-1 h-1 rounded-full bg-[#c99a1e]/40" />
        <span className="absolute bottom-[6%] right-[36%] w-1 h-1 rounded-full bg-[#c99a1e]/40" />
        <span className="absolute top-[54%] right-[4%] w-1.5 h-1.5 rounded-full bg-[#c99a1e]/50" />
        <span className="absolute bottom-[22%] right-[8%] w-1 h-1 rounded-full bg-[#c99a1e]/40" />
      </div>

      {/* Active page sections content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}