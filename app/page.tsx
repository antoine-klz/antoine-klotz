import ServiceHighlights from "@/components/ideas/ServiceHighlights";
import Image from "next/image";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Leistungen Section */}
      <section id="leistungen" className="w-full min-h-screen md:h-[calc(100vh)] flex flex-col justify-center items-center relative">
        <div className="container px-4 md:px-6 w-full max-w-8xl flex flex-col justify-between relative z-10 py-16 md:py-0 h-full mt-[72px]">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-satoshibold">Unsere Leistungen</h2>

            {/* Service Highlights Component */}
            <ServiceHighlights className="mb-16" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full min-h-screen md:h-[calc(100vh)] flex flex-col justify-center items-center relative bg-[#0D5038]/90">
        <div className="container px-4 md:px-6 w-full max-w-8xl flex flex-col justify-between relative z-10 py-16 md:py-0 h-full mt-[72px]">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-satoshibold">Unser Team</h2>

            {/* Team content will be added later */}
            <div className="text-center text-white/80 text-xl">Unser Team-Bereich wird in Kürze verfügbar sein.</div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="w-full min-h-screen md:h-[calc(100vh)] relative overflow-hidden">
        {/* Background Image - Hamburg Map */}
        <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2 h-full opacity-40">
          <div className="relative w-full h-full">
            <Image
              src="/assets/invertedmapofhamburg.png"
              alt="Inverted Map of Hamburg"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center right",
                filter: "brightness(0.7) saturate(0.6)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0E5640]" />
          </div>
        </div>

        <div className="flex-1 px-4 md:px-6 lg:px-8 pt-10 md:pt-0 relative z-10 h-full mt-[72px]">
          <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
            <h2 className="text-5xl font-satoshibold text-[#8AEA7C] mb-6">Kontakt</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
              <div>
                <p className="mb-6 text-white/90">
                  Wir freuen uns, von Ihnen zu hören. Bitte füllen Sie das Formular aus oder kontaktieren Sie uns über die unten stehenden
                  Informationen.
                </p>
                <div className="space-y-4 text-white/90">
                  <div>
                    <h3 className="text-xl font-medium text-[#8AEA7C]">E-Mail</h3>
                    <p>info@robinwood.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#8AEA7C]">Telefon</h3>
                    <p>(555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#8AEA7C]">Adresse</h3>
                    <p>
                      123 Waldweg
                      <br />
                      Grünstadt, 95947
                    </p>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute top-[90px] left-0 flex items-center">
                    <Image src="/assets/anchor-icon.svg" alt="Anchor Icon" width={50} height={50} className="opacity-90" />
                    <span className="text-[#FDFF45] text-2xl ml-5 ">Im Norden zuhause</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20 mb-10 md:mb-0">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8AEA7C] text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8AEA7C] text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8AEA7C] text-white placeholder-white/50"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-[#8AEA7C] text-[#0E5640] px-6 py-2 rounded-md hover:bg-[#7ad96d] transition-colors font-medium">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
