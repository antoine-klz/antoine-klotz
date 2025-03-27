"use client";

import Link from "next/link";
import { useCallback } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const navHeight = 70; // Height of the navigation bar
      window.scrollTo({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#0c0c24] via-[#142541] to-[#0c0c24] backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 px-8 md:px-0 border-b border-white/20">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Brand Section */}
            <div className="space-y-6 max-w-sm">
              <button onClick={() => scrollToSection("hero")} className="flex items-center">
                <Image src="/assets/ak-logo.png" alt="DoubleAA" width={60} height={60} />
                <span className="text-white text-xl tracking-wide">Antoine Klotz</span>
              </button>
              <p className="text-gray-200 leading-relaxed">Webentwickler für digitale Lösungen.</p>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-6">
                <p className="text-lg font-satoshibold">Navigation</p>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => scrollToSection("hero")} className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("leistungen")} className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Leistungen
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("projekte")} className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Projekte
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("team")} className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Team
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("kontakt")} className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Kontakt
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-lg font-satoshibold">Rechtliches</p>
                <ul className="space-y-3">
                  <li>
                    <Link href="/impressum" className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link href="/datenschutz" className="text-gray-200 hover:text-[#ff3647] transition-colors">
                      Datenschutz
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 text-sm text-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} Robin Wood. Alle Rechte vorbehalten.</p>

            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-[#ff3647] transition-colors" aria-label="Instagram">
                <FaInstagram size={20} className="text-[#ff3647]" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-[#ff3647] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} className="text-[#ff3647]" />
              </Link>
            </div>

            <p className="text-gray-200">
              Website Design & Entwicklung:{" "}
              <Link href="https://doubleaastudios.com" className="text-[#ff3647] transition-colors">
                Double AA Studios
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
