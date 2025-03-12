import Image from "next/image";
import ActionButtons from "@/components/ActionButtons";

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
            <div className="text-center max-w-4xl">
              {/* Logo */}
              <div className="flex items-center justify-center mb-6">
                <Image src="/assets/logo-10.png" alt="Robin Wood Logo" width={120} height={120} />
              </div>
              {/* Main Value Proposition - Primary Text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 font-satoshibold">
                Wir schützen die Bäume rund um Ihr Bauprojekt
              </h1>

              {/* Supportive Tagline - Secondary Text */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-satoshi">
                Professioneller Baumschutz für nachhaltige Bauprojekte in Norddeutschland
              </p>
            </div>
          </div>

          {/* Bottom Content Area - Using the ActionButtons component */}
          <ActionButtons secondaryButton="leistungen" />
        </div>
      </section>
    </div>
  );
}
