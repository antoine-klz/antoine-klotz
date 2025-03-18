"use client";
import React from "react";
import Image from "next/image";
import { projectPins } from "@/data/Projekte";
import ActionButtons from "../ActionButtons";
import ProjectPins from "../ProjectPins";
import StatsCounter from "../ideas/StatsCounter";

export default function Projekte() {
  return (
    <section id="projekte" className="w-full h-[calc(100vh-70px)] relative">
      {/* Map Container */}
      <div className="relative w-full h-full">
        {/* Headers */}
        <div className="absolute top-12 left-0 right-0 z-20">
          <h2 className="text-4xl md:text-5xl text-white text-center font-satoshibold mb-6">Unsere Projekte</h2>
          <StatsCounter textColor="#8AEA7C" />
        </div>

        <Image
          src="/assets/newmap2.png"
          alt="Map of Hamburg"
          width={2000}
          height={2000}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.7) saturate(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-[#0E5640]/70" />

        {/* Project Pins Component */}
        <ProjectPins pins={projectPins} />
        <ActionButtons secondaryButton="team" />
      </div>
    </section>
  );
}
