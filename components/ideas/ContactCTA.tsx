"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface ContactCTAProps {
  className?: string;
}

export default function ContactCTA({ className = "" }: ContactCTAProps) {
  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#0E5640] backdrop-blur-md rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#8AEA7C]/30 blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#fdff45]/20 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bereit für Ihren Baumschutz?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihre Bäume während Ihres Bauprojekts schützen können.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8AEA7C]/20 text-[#8AEA7C] mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Telefon</h3>
                <p className="text-white/80">+49 (0) 123 456789</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8AEA7C]/20 text-[#8AEA7C] mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">E-Mail</h3>
                <p className="text-white/80">info@robinwood.de</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8AEA7C]/20 text-[#8AEA7C] mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Standort</h3>
                <p className="text-white/80">Hamburg & Umgebung</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/leistungen">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium border-2 border-white/60 text-white bg-white/5 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Leistungen entdecken
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium bg-[#fdff45] text-[#144723] hover:bg-[#fdff45]/90 transition-all duration-300 w-full sm:w-auto"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
