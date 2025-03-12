import { Button } from "@/components/ui/button";
import { Trees, Recycle, Handshake } from "lucide-react";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="bg-[#0E5640] min-h-[calc(100vh-72px)] relative overflow-hidden">
      {/* Background Image - Hamburg Map */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[100%] opacity-40 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/assets/croppedmapofhamburg.png"
            alt="Inverted Map of Hamburg"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom right",
              filter: " brightness(0.8) saturate(0.7)",
            }}
            className="scale-110" // Slightly larger to ensure blur doesn't show edges
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-[#0E5640]" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full h-[calc(100vh-72px)] flex justify-center relative">
        <div className="container px-4 md:px-6 w-full max-w-8xl flex flex-col justify-between relative z-10 py-12 md:pt-24 md:pb-16 h-full">
          {/* Top Content Area - Now centered vertically */}
          <div className="w-full flex flex-col items-center justify-center flex-grow">
            {/* Main Content */}
            <div className="text-center max-w-4xl my-auto">
              {/* Company Name - Largest Text */}
              <h1 className="text-7xl md:text-8xl lg:text-[115px] font-bold tracking-tighter text-white mb-6 font-satoshibold">Robin Wood</h1>

              {/* Tagline - Medium Text */}
              <p className="text-3xl md:text-4xl lg:text-5xl text-white/90 mb-10 font-satoshi">
                Ihr Experte für nachhaltigen Baumschutz auf Baustellen im Norden.
              </p>

              {/* Icons and Value Proposition */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-3">
                  <Trees size={32} className="text-[#8AEA7C]" />
                  <p className="text-[#8AEA7C] text-xl md:text-2xl font-medium font-satoshibold">Professionell</p>
                </div>
                <div className="flex items-center gap-3">
                  <Recycle size={32} className="text-[#8AEA7C]" />
                  <p className="text-[#8AEA7C] text-xl md:text-2xl font-medium font-satoshibold">Nachhaltig</p>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake size={32} className="text-[#8AEA7C]" />
                  <p className="text-[#8AEA7C] text-xl md:text-2xl font-medium font-satoshibold">Zuverlässig</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content Area - Secondary CTA with Enhanced Visibility */}
          <div className="w-full flex flex-col items-center">
            {/* Enhanced Secondary CTA */}
            <Link href="/leistungen">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-xl font-semibold border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                Unsere Leistungen entdecken
              </Button>
            </Link>
            {/* Animated Down Arrow */}
          </div>
          <ContactButton />
        </div>
      </section>
    </div>
  );
}
