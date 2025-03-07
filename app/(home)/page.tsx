import { Button } from "@/components/ui/button";
import { Trees, Recycle, Handshake, ChevronDown } from "lucide-react";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";

export default function Homepage() {
  return (
    <div className="bg-gradient-to-br from-[#144723] to-[#0b3617] h-full">
      {/* Hero Section */}
      <section
        className="w-full h-[calc(100vh-80px)] flex justify-center relative"
        style={{
          backgroundImage: "url('/assets/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contact Button - Absolutely Positioned Bottom Right */}
        <ContactButton />

        <div className="container px-4 md:px-6 w-full max-w-7xl flex flex-col justify-between relative z-10 py-12 md:py-24 h-full">
          {/* Top Content Area */}
          <div className="w-full flex flex-col items-center">
            {/* Main Content */}
            <div className="text-center max-w-3xl">
              {/* Company Name - Largest Text */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">Robin Wood</h1>

              {/* Tagline - Medium Text */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-10">Ihr Experte für nachhaltige Baumpflege in Hamburg</p>

              {/* Icons and Value Proposition */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <Trees size={32} className="text-[#8AEA7C]" />
                  <p className="text-[#8AEA7C] text-xl md:text-2xl font-medium">Professionell</p>
                </div>
                <div className="flex items-center gap-3">
                  <Recycle size={32} className="text-[#8AEA7C]" />
                  <p className="text-[#8AEA7C] text-xl md:text-2xl font-medium">Nachhaltig</p>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake size={32} className="text-[#8AEA7C]" />
                  <p className="text-[#8AEA7C] text-xl md:text-2xl font-medium">Zuverlässig</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content Area - Secondary CTA with Enhanced Visibility */}
          <div className="w-full flex flex-col items-center mt-auto mb-8">
            {/* Enhanced Secondary CTA */}
            <Link href="/leistungen">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-xl font-semibold border-2 border-[#8AEA7C] text-white bg-[#144723]/70 hover:bg-[#8AEA7C]/20 transition-all duration-300 shadow-[0_0_15px_rgba(138,234,124,0.5)] hover:shadow-[0_0_25px_rgba(138,234,124,0.8)]"
              >
                Unsere Leistungen entdecken
              </Button>
            </Link>
            {/* Animated Down Arrow */}
            <ChevronDown size={36} className="text-white mt-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
