import Image from "next/image";
import ValueCards from "@/components/ValueCards";
import NavButtons from "@/components/NavButtons";

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-[calc(100vh-70px)] relative flex mt-[72px] py-12 md:py-0" aria-label="Hero section">
      {/* Hero Image with Overlay */}
      <Image
        src="/assets/hero-image.png"
        alt="Robin Wood hero background showing sustainable tree protection"
        fill
        priority
        quality={55}
        sizes="100vw"
        className="object-cover z-0"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-[1]"></div>

      {/* Content Container */}
      <div className="container px-4 md:px-6 w-full max-w-8xl z-10 relative md:pt-28">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[115px] font-bold tracking-tighter text-white mb-4 md:mb-6 font-satoshibold">
            Robin Wood
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/90 mb-6 md:mb-10 font-satoshi">
            Ihr Experte für nachhaltigen Baumschutz auf Baustellen im Norden.
          </h2>

          {/* Value Proposition - smaller on mobile with no description */}
          <div className="hidden md:block">
            <ValueCards iconSize={32} showDescription={true} />
          </div>
          <div className="md:hidden">
            <ValueCards iconSize={24} showDescription={true} />
          </div>
        </header>
      </div>

      <div className="absolute bottom-8 md:bottom-16 left-0 right-0 pt-6 md:pt-8 px-4 z-10">
        <NavButtons secondaryButton="leistungen" />
      </div>
    </section>
  );
}
