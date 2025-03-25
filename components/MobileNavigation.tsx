import { Home, X, Menu } from "lucide-react";
import { navItems } from "@/data/TopNav";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function MobileNavigation({ mobileMenuOpen, setMobileMenuOpen, activeSection, scrollToSection }: MobileNavigationProps) {
  return (
    <div className="md:hidden">
      {/* Burger Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="bg-white rounded-full p-2 flex items-center justify-center z-50 relative"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} className="text-[#F65009]" /> : <Menu size={24} className="text-[#F65009]" />}
      </button>

      {/* Full Screen Mobile Menu Overlay with Right to Left Animation */}
      <div
        className={`fixed inset-0 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        } bg-[#F65009] z-40`}
        style={{ top: "65px" }} // Positioned right below the header
      >
        <div className="flex flex-col items-center justify-start pt-10 h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <button
                key={item.name}
                className={`text-xl px-6 py-4 my-1 rounded-full transition-all duration-200 ease-in-out flex items-center gap-2 w-64 justify-center font-satoshibold ${
                  isActive ? "bg-white text-black" : "text-white hover:bg-white/10"
                }`}
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.icon === "Home" && <Home size={16} />}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
