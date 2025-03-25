"use client";

import Link from "next/link";
import { useCallback } from "react";
import Image from "next/image";
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
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 px-8 md:px-0 border-b border-white/70">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Brand Section */}
            <div className="space-y-6 max-w-sm">
              <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} />
              <p className="text-gray-200 leading-relaxed">
                DoubleAA ist eine Webagentur, die professionelle Webseiten für Unternehmen und Organisationen erstellt.
              </p>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-6">
                <p className="text-lg font-satoshibold">Navigation</p>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => scrollToSection("hero")} className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("leistungen")} className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Leistungen
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("projekte")} className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Projekte
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("team")} className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Team
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("kontakt")} className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Kontakt
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-lg font-satoshibold">Rechtliches</p>
                <ul className="space-y-3">
                  <li>
                    <Link href="/impressum" className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link href="/datenschutz" className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link href="/agb" className="text-gray-200 hover:text-[#8AEA7C] transition-colors">
                      AGB
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
            <p>© {currentYear} Project Name. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-[#8AEA7C] transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" className="hover:text-[#8AEA7C] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-[#8AEA7C] transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
