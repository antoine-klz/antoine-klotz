"use client";
import React from "react";
import ActionButtons from "../ActionButtons";
import { teamMembers } from "@/data/Team";

export default function Team() {
  return (
    <section id="team" className="w-full min-h-[calc(100vh-70px)] py-16 px-4 relative bg-[#0E5640]">
      <h2 className="text-4xl md:text-5xl text-[#8AEA7C] text-center font-satoshibold mb-3">Unser Team</h2>
      <h3 className="text-white text-lg md:text-xl text-center max-w-4xl mx-auto mb-16">
        Unser erfahrenes Team steht für Qualität und Zuverlässigkeit bei allen Baumpflegearbeiten.
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row h-auto md:h-[28rem]">
            <div className="md:w-1/3 h-80 md:h-full bg-gray-100 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-satoshibold text-[#0E5640] mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ActionButtons secondaryButton="none" />
    </section>
  );
}
