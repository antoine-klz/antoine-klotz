import { Button } from "@/components/ui/button";
import { Trees, Recycle, Handshake } from "lucide-react";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import ValueCards from "@/components/ideas/ValueCards";

export default function Homepage() {
  return (
    <div className="bg-gradient-to-br from-[#144723] to-[#0b3617] h-full">
      {/* Hero Section */}
      <section
        className="w-full h-[calc(100vh-72px)] flex justify-center relative"
        style={{
          backgroundImage: "url('/assets/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
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
              <ValueCards layout="horizontal" iconSize={32} />
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
