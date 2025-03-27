"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectPins } from "@/data/Projekte";

export default function Projekte() {
  const [activeProject, setActiveProject] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [showDescriptionPopover, setShowDescriptionPopover] = useState<boolean>(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  // Get the current active project
  const currentProject = projectPins.find((p) => p.id === activeProject) || projectPins[0];

  // Reset loading state when changing projects
  useEffect(() => {
    setIsImageLoading(true);
    // Close description popover when changing projects
    setShowDescriptionPopover(false);
  }, [activeProject, activeSlide]);

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

  // Generate image path for the current project
  const getProjectImagePath = () => {
    // If project has screenshots array and there's a specific slide, use that
    if (currentProject.screenshots && currentProject.screenshots.length > 0) {
      // The paths in data/Projekte.ts already include the starting slash
      return currentProject.screenshots[activeSlide];
    }

    // Otherwise use a default image named after the project id
    return `/assets/projects/${currentProject.id}.jpg`;
  };

  // Toggle description popover
  const toggleDescriptionPopover = () => {
    setShowDescriptionPopover(!showDescriptionPopover);
  };

  return (
    <section id="portfolio" className="w-full min-h-[calc(100vh-65px)] relative text-white">
      <div className="h-[calc(100vh-65px)] w-full relative py-8 px-4 lg:px-8 flex items-center justify-center">
        {/* Project Preview Card */}
        <div className="w-full max-w-6xl h-[80vh] relative bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative h-full w-full bg-gray-50 overflow-hidden">
            {/* Project Image Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Loading placeholder shown while image loads */}
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-black/20 z-5">
                  <svg className="animate-spin h-10 w-10 text-[#ff3647]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              )}

              {/* Project Image */}
              <Image
                src={getProjectImagePath()}
                alt={currentProject.name}
                fill
                className={`object-cover transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                onLoadingComplete={() => setIsImageLoading(false)}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                quality={90}
                onError={() => setIsImageLoading(false)} // Hide loader if image fails to load
              />
            </div>

            {/* Navigation Arrows */}
            {currentProject.screenshots && currentProject.screenshots.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0c0c24] p-2 rounded-full shadow-md transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0c0c24] p-2 rounded-full shadow-md transition-all z-10"
                  aria-label="Next image"
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
                      className={`w-2 h-2 rounded-full ${idx === activeSlide ? "bg-[#ff3647]" : "bg-[#0c0c24]/20"}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Info Bar at bottom with cleaner design */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-6 px-8 z-10">
            <div className="flex flex-col md:flex-row gap-6 justify-start">
              {/* Project Link */}
              <div className="hidden md:block ml-32">
                <h3 className="text-lg font-satoshibold text-[#0c0c24] mb-2">Link</h3>
                <Link
                  href={currentProject.url.startsWith("http") ? currentProject.url : `https://${currentProject.url}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff3647] text-white rounded-lg hover:bg-[#e02e3d] transition-colors text-sm"
                >
                  {currentProject.url.replace("https://", "")}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>

              {/* Services */}
              <div className="ml-4">
                <h3 className="text-lg font-satoshibold text-[#0c0c24] mb-2">Services</h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {currentProject.services.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#ff3647]/10 text-[#0c0c24] text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More Infos Button (centered above the info bar) */}
          <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 z-20">
            <button
              onClick={toggleDescriptionPopover}
              className="flex items-center gap-2 px-5 py-2 bg-white shadow-md rounded-full text-[#0c0c24] hover:text-[#ff3647] transition-colors group"
            >
              <span className="text-lg font-satoshibold">More infos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${showDescriptionPopover ? "" : "rotate-180"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Description Popover */}
            {showDescriptionPopover && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[300px] md:w-[400px] bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-20">
                <p className="text-[#0c0c24]/80 text-sm md:text-base">{currentProject.description}</p>
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Improved Project Navigation at Bottom Left */}
      <div className="absolute bottom-8 left-8 z-30">
        <div className="bg-white rounded-xl shadow-lg p-4 w-56">
          <h3 className="font-satoshibold text-[#0c0c24] mb-4 text-lg border-b border-gray-200 pb-2">Portfolio</h3>
          <div className="max-h-[250px] overflow-y-auto pr-2 space-y-4">
            {projectPins.map((project) => (
              <div
                key={project.id}
                className={`cursor-pointer relative transition-all duration-300 p-2 rounded-lg ${
                  project.id === activeProject ? "bg-[#ff3647]/10 border-l-4 border-[#ff3647]" : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveProject(project.id);
                  setActiveSlide(0); // Reset carousel when changing projects
                }}
              >
                <h4 className={`font-satoshibold text-base mb-1 ${project.id === activeProject ? "text-[#ff3647]" : "text-[#0c0c24]"}`}>
                  {project.name}
                </h4>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-[#0c0c24]/60">{project.year}</p>
                  {project.id === activeProject && (
                    <svg className="h-4 w-4 text-[#ff3647]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Visit Link - only shown on mobile */}
          <div className="mt-4 pt-4 border-t border-gray-200 md:hidden">
            <Link
              href={currentProject.url.startsWith("http") ? currentProject.url : `https://${currentProject.url}`}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#ff3647] text-white rounded-lg hover:bg-[#e02e3d] transition-colors font-satoshibold text-sm"
            >
              {currentProject.url.replace("https://", "")}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      </div>

      {/* Brand accent in corner */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[30px] border-r-[30px] border-b-[#ff3647] border-r-transparent"></div>
    </section>
  );
}
