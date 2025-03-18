import React from "react";

export default function Team() {
  return (
    <section id="team" className="w-full h-[calc(100vh-72px)] flex flex-col justify-center items-center relative bg-white">
      <div className="container px-4 md:px-6 w-full max-w-8xl flex flex-col justify-between relative z-10 py-16 md:py-0 h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E5640] mb-12 text-center font-satoshibold">Unser Team</h2>

          {/* Team content will be added later */}
          <div className="text-center text-[#0E5640] text-xl">Unser Team-Bereich wird in Kürze verfügbar sein.</div>
        </div>
      </div>
    </section>
  );
}
