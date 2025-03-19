"use client";

import React from "react";
import NavButtons from "@/components/NavButtons";
import { services } from "@/data/Leistungen";

export default function Leistungen() {
  return (
    <section id="leistungen" className="w-full min-h-[calc(100vh-65px)] py-16 px-4">
      <h2 className="text-4xl md:text-5xl text-white text-center font-satoshibold mb-8">Unsere Leistungen</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:transform hover:scale-105 hover:ring-2 hover:ring-[#8AEA7C]/50"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5" style={{ backgroundColor: `${service.color}20` }}>
                <service.icon size={28} style={{ color: service.color }} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{service.title}</h3>
              <p className="text-white/70 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16">
          <NavButtons secondaryButton="projekte" />
        </div>
      </div>
    </section>
  );
}
