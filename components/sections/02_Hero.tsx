export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-[calc(100vh-65px)] mt-[65px] relative flex flex-col py-8 md:py-0 overflow-hidden  text-white"
      aria-label="Hero section"
    >
      {/* Content Container - centered vertically with flex */}
      <div className="container px-4 md:px-6 w-full mx-auto max-w-8xl z-10 relative flex flex-col justify-center items-center h-full">
        <div className="w-full flex flex-col items-center">
          <header className="text-center max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 md:font-satoshi font-satoshibold text-center text-[#ff3647]">
              Digitale Lösungen für Ihr Handwerksunternehmen
            </h2>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base md:text-lg mb-4 text-white">
                Wir bringen Ihr Handwerks- oder Bauunternehmen ins digitale Zeitalter. Mit maßgeschneiderten Webauftritten, professionellem Branding
                und cleverer Prozessautomatisierung steigern wir Ihre Effizienz und Sichtbarkeit.
              </p>
              <p className="text-base md:text-lg font-medium text-white">Handwerk trifft Technologie. Tradition trifft Innovation.</p>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
