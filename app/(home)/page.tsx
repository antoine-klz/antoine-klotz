import { Button } from "@/components/ui/button";
import { Trees, Recycle, Handshake, PhoneCall, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#144723] to-[#0b3617]">
      {/* Hero Section */}
      <section
        className="w-full h-full min-h-[calc(100vh-80px)] flex justify-center relative"
        style={{
          backgroundImage: "url('/assets/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container px-4 md:px-6 w-full max-w-7xl flex flex-col justify-between relative z-10 py-12 md:py-24">
          {/* Top Content Area */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
            {/* Left Side - Main Content */}
            <div className="text-center lg:text-left max-w-3xl">
              {/* Company Name - Largest Text */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">Robin Wood</h1>

              {/* Tagline - Medium Text */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-10">Ihr Experte für nachhaltige Baumpflege in Hamburg</p>

              {/* Icons and Value Proposition */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mb-12">
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

            {/* Right Side - Contact Button as Circle */}
            <div className="mt-8 lg:mt-0">
              <Link href="/kontakt">
                <Button
                  className="rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-0 flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: "#fdff45", color: "#144723" }}
                >
                  <PhoneCall size={28} className="mb-1" />
                  <span className="text-sm font-semibold">Kontakt</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Content Area - Secondary CTA with Enhanced Visibility */}
          <div className="w-full flex flex-col items-center mt-12 lg:mt-16">
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
            <ChevronDown size={36} className="text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
