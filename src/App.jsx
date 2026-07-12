import React from "react";
import BackgroundLayout from "./components/BackgroundLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events"

export default function App() {
  return (
    <BackgroundLayout>
      {/* Home / Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Events Section */}
      <div id="events">
        <Events />
      </div>

      {/* Lending Section */}
      <section id="lending" className="min-h-screen flex items-center justify-center border-t border-white/5 px-8">
        <div className="max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-[#d4a017] mb-6">Lending Library</h2>
          <p className="text-slate-300 font-serif text-lg leading-relaxed">
            Borrow, enjoy, and return. Our global catalog allows registered members to exchange books safely.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center border-t border-white/5 px-8">
        <div className="max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-[#d4a017] mb-6">The Literary Blog</h2>
          <p className="text-slate-300 font-serif text-lg leading-relaxed">
            Weekly essays on writing styles, narrative deep-dives, and missing translations.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="min-h-screen flex items-center justify-center border-t border-white/5 px-8 pb-24">
        <div className="max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-[#d4a017] mb-6">Meet Our Team</h2>
          <p className="text-slate-300 font-serif text-lg leading-relaxed">
            Meet the library developers and platform creators working behind the curtains.
          </p>
        </div>
      </section>
    </BackgroundLayout>
  );
}