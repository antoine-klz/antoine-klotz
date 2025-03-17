"use client";

import React, { useState } from "react";
import ActionButtons from "@/components/ActionButtons";
import { services } from "@/data/Leistungen";

export default function Leistungen() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="leistungen" className="w-full min-h-[calc(100vh-70px)] py-16 px-4 relative">
      <h2 className="text-4xl md:text-5xl text-white text-center font-satoshibold mb-3">Unsere Leistungen</h2>
      <h3 className="text-lg md:text-xl text-white mb-10 text-center">Wir bieten Ihnen folgende Leistungen an:</h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:transform hover:scale-105 ${
              activeService === service.id ? "ring-2 ring-[#8AEA7C]/50" : ""
            }`}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5" style={{ backgroundColor: `${service.color}20` }}>
              <service.icon size={28} style={{ color: service.color }} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">{service.title}</h3>
            <p className="text-white/70 text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <ActionButtons secondaryButton="team" />
    </section>
  );
}
