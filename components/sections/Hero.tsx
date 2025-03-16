import Image from "next/image";
import ValueCards from "@/components/ideas/ValueCards";
import ActionButtons from "@/components/ActionButtons";

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen md:h-screen relative flex items-center justify-center" aria-label="Hero section">
      {/* Hero Background Image with Next/Image */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-[1]"></div>

      {/* Content Container */}
      <div className="container px-4 md:px-6 w-full max-w-8xl z-10 py-12 md:py-0 mt-[72px]">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl lg:text-[115px] font-bold tracking-tighter text-white mb-6 font-satoshibold">Robin Wood</h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white/90 mb-10 font-satoshi">
            Ihr Experte für nachhaltigen Baumschutz auf Baustellen im Norden.
          </h2>

          {/* Value Proposition */}
          <ValueCards iconSize={32} />

          <div className="pt-8">
            <ActionButtons secondaryButton="leistungen" />
          </div>
        </header>
      </div>
    </section>
  );
}
