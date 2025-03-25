"use client";
import { Home } from "lucide-react";
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
      const sections = ["hero", "leistungen", "projekte", "team", "kontakt"];
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
    <header className="px-4 lg:px-6 h-[65px] flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="DoubleAA" width={120} height={120} />
        </button>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <button
                  key={item.name}
                  className={`relative text-md px-4 py-2 transition-all duration-300 ease-in-out flex items-center gap-1.5 font-satoshibold group ${
                    isActive ? "text-[#F65009]" : "text-white hover:text-[#F65009]"
                  }`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.icon === "Home" && (
                    <Home size={16} className={`${isActive ? "stroke-[#F65009]" : "stroke-white group-hover:stroke-[#F65009]"}`} />
                  )}
                  {item.name}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F65009] rounded-full"></span>}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F65009] rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                </button>
              );
            })}
            <button
              className="ml-3 bg-[#F65009] text-black px-5 py-1.5 rounded-full font-satoshibold hover:bg-[#ff6b29] transition-colors"
              onClick={() => scrollToSection("kontakt")}
            >
              Kontakt
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
