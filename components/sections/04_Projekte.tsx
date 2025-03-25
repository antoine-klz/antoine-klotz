"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projectPins } from "@/data/Projekte";

export default function Projekte() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projekte" className="w-full min-h-[calc(100vh-65px)] relative bg-white py-24">
      {/* Headers */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl text-black text-center font-satoshibold mb-4">Unsere Projekte</h2>

        {/* Accent line */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-[#F65009]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectPins.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white border border-black/10 shadow-sm hover:shadow-md rounded-lg overflow-hidden transition-all duration-500 ease-out h-80"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#F65009] transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

              {/* Project Content */}
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-satoshibold text-black mb-2">{project.name}</h3>
                  <p className="text-[#F65009] font-medium">{project.year}</p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.services.map((service, index) => (
                      <span key={index} className="text-xs px-3 py-1 rounded-full bg-black/5 text-black">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* URL - Shows on hover */}
                <div
                  className={`transition-all duration-300 ${hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <Link
                    href={project.url.startsWith("http") ? project.url : `https://${project.url}`}
                    target="_blank"
                    className="inline-flex items-center mt-4 text-[#F65009] group-hover:text-black transition-colors"
                  >
                    <span className="border-b border-[#F65009]/50 group-hover:border-black">{project.url.replace("https://", "")}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-[#F65009] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
