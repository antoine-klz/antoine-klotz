"use client";
import { useState, useEffect } from "react";
import { navItems } from "@/data/TopNav";
import MobileNavigation from "@/components/MobileNavigation";
import Image from "next/image";

export default function TopNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll event to track active section
  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sections = ["hero", "projects", "services", "kontakt"];
      const navHeight = 65; // Height of the navigation bar
      const scrollPosition = window.scrollY + navHeight; // Use nav height for better detection

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
  }, []);

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
      const navHeight = 65; // Height of the navigation bar
      window.scrollTo({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="px-4 lg:px-6 h-[65px] flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-[#a6a6a690] backdrop-blur-sm">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <button onClick={() => scrollToSection("hero")} className="flex items-center">
          <Image src="/assets/ak-logo.png" alt="DoubleAA" width={80} height={80} />
          <span className="text-white font-satoshibold text-xl tracking-wide">Antoine Klotz</span>
        </button>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <div className="bg-[#3a3a3a] rounded-full px-2 py-1.5 flex items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <button
                  key={item.name}
                  className={`relative text-md px-4 py-1.5 transition-all duration-300 ease-in-out ${
                    isActive ? "text-[#F65009] font-medium" : "text-[#e0e0e0] hover:text-white"
                  }`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.name}
                </button>
              );
            })}
            <button
              className="bg-[#F65009] text-white px-5 py-1.5 rounded-full font-medium hover:bg-[#ff3647] transition-colors ml-1"
              onClick={() => scrollToSection("kontakt")}
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </div>
    </header>
  );
}
