import { Home, X, Menu } from "lucide-react";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function MobileNavigation({ mobileMenuOpen, setMobileMenuOpen, activeSection, scrollToSection }: MobileNavigationProps) {
  // Navigation items with their respective section IDs
  const navItems = [
    { name: "Home", sectionId: "hero", icon: <Home size={16} /> },
    { name: "Leistungen", sectionId: "leistungen" },
    { name: "Projekte", sectionId: "projekte" },
    { name: "Team", sectionId: "team" },
    { name: "Kontakt", sectionId: "kontakt" },
  ];

  return (
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
        } bg-[#0E5640] z-40`}
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
  );
}
