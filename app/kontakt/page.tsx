import Image from "next/image";

export default function KontaktPage() {
  return (
    <div className="bg-[#0E5640] min-h-[calc(100vh-72px)] relative overflow-hidden">
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

      <main className="flex-1 px-4 md:px-6 lg:px-8 pt-10 md:pt-24 relative z-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-satoshibold text-[#8AEA7C] mb-6">Kontakt</h1>

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
      </main>
    </div>
  );
}
