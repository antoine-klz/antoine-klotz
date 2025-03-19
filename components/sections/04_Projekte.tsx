"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectPins } from "@/data/Projekte";
import ProjectPins from "../ProjectPins";
import StatsCounter from "../StatsCounter";
import ProjectLegend from "../ProjectLegend";

export default function Projekte() {
  // State to track the currently active/highlighted pin
  const [activePin, setActivePin] = useState<number | null>(null);

  // Handler for when pins are clicked (either from map or legend)
  const handlePinClick = (pinId: number | null) => {
    setActivePin(pinId);
  };

  return (
    <section id="projekte" className="w-full h-[calc(100vh-65px)] relative">
      {/* Map Container */}
      <div className="relative w-full h-full">
        {/* Headers - adjusted for better mobile display */}
        <div className="absolute top-12 left-0 right-0 z-20 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl text-white text-center font-satoshibold mb-4 md:mb-6">Unsere Projekte</h2>
          <StatsCounter textColor="#8AEA7C" />
        </div>

        {/* Background Map Image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/assets/project-map.png"
            alt="Map of Hamburg"
            fill
            sizes="100vw"
            quality={60}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.7) saturate(0.6)",
            }}
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-[#0E5640]/70" />
        </div>

        {/* Project Pins Component - visible on all devices */}
        <ProjectPins pins={projectPins} activePin={activePin} onPinClick={handlePinClick} />

        {/* Project Legend - Only on desktop */}
        <div className="absolute top-1/2 -translate-y-1/2 left-8 z-30 hidden md:block">
          <ProjectLegend pins={projectPins} activePin={activePin} onPinClick={handlePinClick} />
        </div>
      </div>
    </section>
  );
}
