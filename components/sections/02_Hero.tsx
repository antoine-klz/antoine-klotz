import ValueCards from "@/components/ValueCards";
import NavButtons from "@/components/NavButtons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-[calc(100vh-65px)] mt-[65px] relative flex flex-col py-8 md:py-0 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Content Container - centered vertically with flex */}
      <div className="container px-4 md:px-6 w-full mx-auto max-w-8xl z-10 relative flex flex-col justify-center items-center h-full">
        <div className="w-full flex flex-col items-center">
          <header className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black mb-4 md:mb-6 font-satoshibold hidden sm:block">
              Project Name
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black mb-6 md:mb-8 md:font-satoshi font-satoshibold">
              Project Description
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
