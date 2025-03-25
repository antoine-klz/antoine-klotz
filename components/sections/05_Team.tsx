"use client";
import React from "react";
import { teamMembers } from "@/data/Team";
import { User } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="w-full min-h-[calc(100vh-65px)] py-16 px-8 relative">
      <h2 className="text-4xl md:text-5xl text-black text-center font-satoshibold mb-3">Unser Team</h2>
      <h3 className="text-black text-lg md:text-xl text-center max-w-4xl mx-auto mb-16">
        Unser erfahrenes Team steht für Qualität und Zuverlässigkeit bei allen Baumpflegearbeiten.
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/20 flex flex-col md:flex-row h-auto md:h-[28rem] transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:transform hover:scale-105 hover:ring-2 hover:ring-[#8AEA7C]/50"
          >
            <div className="md:w-1/3 h-80 md:h-full bg-gray-100/20 flex items-center justify-center">
              <User size={128} className="text-black/80" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-satoshibold text-[#8AEA7C]">{member.name}</h3>
              <p className="text-black text-lg mb-4">{member.role}</p>
              <p className="text-black/80">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
