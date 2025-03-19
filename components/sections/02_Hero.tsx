import Image from "next/image";
import ValueCards from "@/components/ValueCards";
import NavButtons from "@/components/NavButtons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-[calc(100vh-65px)] mt-[65px] relative flex flex-col py-8 md:py-0 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero Image with Overlay */}
      <Image
        src="/assets/hero-image.png"
        alt="Robin Wood hero background showing sustainable tree protection"
        fill
        priority
        quality={50}
        sizes="100vw"
        className="object-cover z-0"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-[1]"></div>

      {/* Content Container - centered vertically with flex */}
      <div className="container px-4 md:px-6 w-full mx-auto max-w-8xl z-10 relative flex flex-col justify-center items-center h-full">
        <div className="w-full flex flex-col items-center">
          <header className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 md:mb-6 font-satoshibold hidden sm:block">
              Robin Wood
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 md:mb-8 md:font-satoshi font-satoshibold">
              Ihr Experte für nachhaltigen Baumschutz auf Baustellen im Norden.
            </h2>

            {/* Value Cards */}
            <div className="hidden md:block">
              <ValueCards iconSize={32} showDescription={true} />
            </div>
            <div className="md:hidden">
              <ValueCards iconSize={24} showDescription={true} />
            </div>
          </header>

          {/* Nav Buttons */}
          <div className="mt-8 md:mt-16 w-full px-2 md:mb-8">
            <NavButtons secondaryButton="leistungen" />
          </div>
        </div>
      </div>
    </section>
  );
}
