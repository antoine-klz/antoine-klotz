"use client";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "@/data/TopNav";
import MobileNavigation from "@/components/MobileNavigation";

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
          <span className="text-2xl text-white mt-0.5 font-satoshibold">Project Name</span>
        </button>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <div className="bg-white rounded-full p-1 flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <button
                  key={item.name}
                  className={`text-md px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 font-satoshibold ${
                    isActive ? "bg-[#F65009] text-black" : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.icon === "Home" && <Home size={16} />}
                  {item.name}
                </button>
              );
            })}
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
