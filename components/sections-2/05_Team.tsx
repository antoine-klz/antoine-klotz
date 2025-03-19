"use client";
import React from "react";
import { teamMembers } from "@/data/Team";
import { User } from "lucide-react";
import NavButtons from "@/components/NavButtons";

export default function Team() {
  return (
    <section id="team" className="w-full min-h-[calc(100vh-65px)] py-16 px-8 relative bg-[#f4f9f2]">
      <h2 className="text-4xl md:text-5xl text-[#0E5640] text-center font-satoshibold mb-3">Unser Team</h2>
      <h3 className="text-[#0E5640] text-lg md:text-xl text-center max-w-4xl mx-auto mb-16">
        Unser erfahrenes Team steht für Qualität und Zuverlässigkeit bei allen Baumpflegearbeiten.
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden border border-[#0E5640]/10 flex flex-col md:flex-row h-auto md:h-[24rem] transition-all duration-300 hover:ring-2 hover:ring-[#8AEA7C]/50"
          >
            <div className="md:w-1/3 h-80 md:h-full bg-[#f0f7ed] flex items-center justify-center">
              <User size={128} className="text-[#0E5640]/60" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-satoshibold text-[#0E5640] mb-2">{member.name}</h3>
              <p className="text-[#0E5640]/90 mb-4">{member.role}</p>
              <p className="text-[#3a5249]">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-16 flex justify-center">
        <NavButtons colorMode="light" />
      </div>
    </section>
  );
}
