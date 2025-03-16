"use client";

import { Home, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TopNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll event to change navbar transparency and track active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Track active section
      const sections = ["hero", "leistungen", "team", "kontakt"];
      const scrollPosition = window.scrollY + 100; // Add offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Navigation items with their respective section IDs
  const navItems = [
    { name: "Home", sectionId: "hero", icon: <Home size={16} /> },
    { name: "Leistungen", sectionId: "leistungen" },
    { name: "Team", sectionId: "team" },
    { name: "Kontakt", sectionId: "kontakt" },
  ];

  return (
    <header
      className={`px-4 lg:px-6 h-[72px] flex items-center justify-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#0A4A35]/80 via-[#0E5640]/80 to-[#0D5038]/80 backdrop-blur-sm"
          : "bg-gradient-to-r from-[#0A4A35] via-[#0E5640] to-[#0D5038]"
      }`}
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
          <Image src="/assets/logo-white.svg" alt="Robin Wood Logo" width={28} height={28} />
          <span className="text-2xl text-white mt-0.5 font-satoshibold">Robin Wood</span>
        </button>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <div className="bg-white rounded-full p-1 flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <button
                  key={item.name}
                  className={`text-md px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 font-satoshibold ${
                    isActive ? "bg-[#8AEA7C] text-[#144723]" : "text-[#144723] hover:bg-gray-100"
                  }`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.icon && item.icon}
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Burger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-white rounded-full p-2 flex items-center justify-center z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-[#144723]" /> : <Menu size={24} className="text-[#144723]" />}
          </button>

          {/* Full Screen Mobile Menu Overlay with Right to Left Animation */}
          <div
            className={`fixed inset-0 transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
            } ${scrolled ? "bg-[#0E5640]/95 backdrop-blur-sm" : "bg-[#0E5640]"} z-40`}
            style={{ top: "72px" }} // Positioned right below the header
          >
            <div className="flex flex-col items-center justify-start pt-10 h-full">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <button
                    key={item.name}
                    className={`text-xl px-6 py-4 my-1 rounded-full transition-all duration-200 ease-in-out flex items-center gap-2 w-64 justify-center font-satoshibold ${
                      isActive ? "bg-[#8AEA7C] text-[#144723]" : "text-white hover:bg-white/10"
                    }`}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.icon && item.icon}
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
