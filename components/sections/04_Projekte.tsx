"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projectPins } from "@/data/Projekte";

export default function Projekte() {
  const [activeProject, setActiveProject] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Get the current active project
  const currentProject = projectPins.find((p) => p.id === activeProject) || projectPins[0];

  // Handle navigation of carousel
  const nextSlide = () => {
    if (currentProject.screenshots && currentProject.screenshots.length > 0) {
      setActiveSlide((prev) => (prev === currentProject.screenshots!.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (currentProject.screenshots && currentProject.screenshots.length > 0) {
      setActiveSlide((prev) => (prev === 0 ? currentProject.screenshots!.length - 1 : prev - 1));
    }
  };

  return (
    <section id="projects" className="w-full min-h-[calc(100vh-65px)] relative bg-white flex">
      {/* Projects Sidebar Navigation with Timeline */}
      <div className="w-32 lg:w-56 h-[calc(100vh-65px)] overflow-y-auto">
        <div className="p-6 relative">
          <h3 className="text-lg font-satoshibold text-black mb-8">Projekte</h3>

          {/* Timeline Line */}
          <div className="absolute left-10 top-20 bottom-6 w-[1px] bg-black/10"></div>

          <div className="space-y-10">
            {projectPins.map((project) => (
              <div
                key={project.id}
                className={`cursor-pointer pl-8 relative transition-all duration-300`}
                onClick={() => {
                  setActiveProject(project.id);
                  setActiveSlide(0); // Reset carousel when changing projects
                }}
              >
                <div className={`${project.id === activeProject ? "opacity-100" : "opacity-70 hover:opacity-100"}`}>
                  <h4 className={`font-satoshibold text-black text-sm mb-1 ${project.id === activeProject ? "text-[#F65009]" : ""}`}>
                    {project.name}
                  </h4>
                  <p className="text-xs text-black/60">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalistic Main Content */}
      <div className="flex-1 h-[calc(100vh-65px)] overflow-y-auto">
        <div className="p-8">
          {/* Screenshot Carousel with Overlaid Header */}
          <div className="mb-8">
            {currentProject.screenshots && currentProject.screenshots.length > 0 ? (
              <div className="relative h-[70vh] bg-gray-50 rounded-lg overflow-hidden">
                {/* Screenshot Display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for screenshot */}
                  <div className="absolute inset-0 flex items-center justify-center text-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Overlay with title, year and link - with gradient for better readability */}
                <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-satoshibold text-white mb-2 drop-shadow-md">{currentProject.name}</h2>
                      <p className="text-lg text-white/90">{currentProject.year}</p>
                    </div>
                    <Link
                      href={currentProject.url.startsWith("http") ? currentProject.url : `https://${currentProject.url}`}
                      target="_blank"
                      className="mt-4 md:mt-0 inline-flex items-center text-white hover:text-[#F65009] transition-colors group"
                    >
                      <span className="border-b border-white/50 group-hover:border-[#F65009]">{currentProject.url.replace("https://", "")}</span>
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

                {/* Navigation Arrows */}
                {currentProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition-all z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition-all z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {currentProject.screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlide(idx)}
                          className={`w-2 h-2 rounded-full ${idx === activeSlide ? "bg-[#F65009]" : "bg-white/60"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="h-[70vh] flex items-center justify-center bg-gray-50 rounded-lg">
                {/* Title overlay even when no screenshots */}
                <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-black/20 via-black/10 to-transparent z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-satoshibold text-black mb-2">{currentProject.name}</h2>
                      <p className="text-lg text-[#F65009]">{currentProject.year}</p>
                    </div>
                    <Link
                      href={currentProject.url.startsWith("http") ? currentProject.url : `https://${currentProject.url}`}
                      target="_blank"
                      className="mt-4 md:mt-0 inline-flex items-center text-[#F65009] hover:text-black transition-colors group"
                    >
                      <span className="border-b border-[#F65009]/50 group-hover:border-black">{currentProject.url.replace("https://", "")}</span>
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
                <p className="text-black/40">Keine Screenshots verfügbar</p>
              </div>
            )}
          </div>

          {/* Minimalistic Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-satoshibold text-black mb-4">Beschreibung</h3>
              <p className="text-black/80">{currentProject.description}</p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-satoshibold text-black mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.services.map((service, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-black/5 text-black text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange accent in corner */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[30px] border-r-[30px] border-b-[#F65009] border-r-transparent"></div>
    </section>
  );
}
