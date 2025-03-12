"use client";

import { useEffect, useState, useRef } from "react";
import ValueCards from "@/components/ideas/ValueCards";
import StatsCounter from "@/components/ideas/StatsCounter";
import ProjectProcess from "@/components/ideas/ProjectProcess";
import Testimonials from "@/components/ideas/Testimonials";
import ServiceHighlights from "@/components/ideas/ServiceHighlights";
import ContactCTA from "@/components/ideas/ContactCTA";

// Client component for animations
function HomeContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0E5640] to-[#083828] min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Content */}
          <div className="text-center mb-16">
            {/* Company Name */}
            <div className="mb-6">
              <h1
                className={`text-7xl md:text-8xl lg:text-[115px] font-bold tracking-tighter text-white font-satoshibold transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Robin Wood
              </h1>
            </div>

            {/* Tagline */}
            <p
              className={`text-3xl md:text-4xl lg:text-5xl text-white/90 mb-12 font-satoshi transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Ihr Experte für nachhaltigen Baumschutz auf Baustellen im Norden.
            </p>

            {/* Value Cards */}
            <ValueCards isVisible={isVisible} />

            {/* Stats Counter */}
            <StatsCounter isVisible={isVisible} />
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Unsere Leistungen</h2>
          <ServiceHighlights />
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <ProjectProcess />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Das sagen unsere Kunden</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
}

// Server Component wrapper
export default function Homepage() {
  return <HomeContent />;
}
