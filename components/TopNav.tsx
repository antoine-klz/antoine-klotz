"use client";

import { Home, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TopNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Navigation items with their respective paths
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Team", path: "/team" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center justify-center bg-[#0E5640] relative z-50">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo-10.png" alt="Robin Wood Logo" width={30} height={30} />
          <span className="text-2xl text-white mt-0.5 font-satoshibold">Robin Wood</span>
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <div className="bg-white rounded-full p-1 flex">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  className={`text-md px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 font-satoshibold ${
                    isActive ? "bg-[#8AEA7C] text-[#144723]" : "text-[#144723] hover:bg-gray-100"
                  }`}
                  href={item.path}
                >
                  {item.icon && item.icon}
                  {item.name}
                </Link>
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
            className={`fixed inset-0 bg-[#144723] z-40 transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
            }`}
            style={{ top: "80px" }} // Positioned right below the header
          >
            <div className="flex flex-col items-center justify-start pt-10 h-full">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    className={`text-xl px-6 py-4 my-1 rounded-full transition-all duration-200 ease-in-out flex items-center gap-2 w-64 justify-center font-satoshibold ${
                      isActive ? "bg-[#8AEA7C] text-[#144723]" : "text-white hover:bg-white/10"
                    }`}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && item.icon}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
