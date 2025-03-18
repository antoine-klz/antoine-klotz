"use client";

import React from "react";
import ActionButtons from "@/components/ActionButtons";
import { services } from "@/data/Leistungen";

export default function Leistungen() {
  return (
    <section id="leistungen" className="w-full min-h-[calc(100vh-70px)] py-16 px-4 relative">
      <h2 className="text-4xl md:text-5xl text-[#8AEA7C] text-center font-satoshibold mb-3">Unsere Leistungen</h2>
      <h3 className="text-lg md:text-xl text-white mb-10 text-center">Wir bieten Ihnen folgende Leistungen an:</h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:transform hover:scale-105 hover:ring-2 hover:ring-[#8AEA7C]/50"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5" style={{ backgroundColor: `${service.color}20` }}>
              <service.icon size={28} style={{ color: service.color }} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">{service.title}</h3>
            <p className="text-white/70 text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <ActionButtons secondaryButton="projekte" />
    </section>
  );
}
