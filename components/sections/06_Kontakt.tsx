import React from "react";
import Image from "next/image";

export default function Kontakt() {
  return (
    <section id="kontakt" className="w-full min-h-[calc(100vh-65px)] relative bg-[#0E5640] ">
      <div className="flex-1 px-4 md:px-6 lg:px-8 pt-10 relative z-10 h-full md:pt-24 ">
        <div className="mx-auto max-w-6xl h-full flex flex-col ">
          <h2 className="text-5xl font-satoshibold text-[#8AEA7C] mb-6">Kontakt</h2>
          <p className="text-white/90 md:w-1/2 mb-8">
            Wir freuen uns, von Ihnen zu hören. Bitte füllen Sie das Formular aus oder kontaktieren Sie uns über die unten stehenden Informationen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {/* Contact Form - First on mobile, second on desktop */}
            <div className="md:order-2 order-1">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 mb-10 md:mb-0">
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
                  <button type="submit" className="bg-[#fdff45] text-[#144723] px-6 py-2 rounded-lg hover:bg-[#fdff45] transition-colors font-medium">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Second on mobile, first on desktop */}
            <div className="md:order-1 order-2 flex flex-col">
              <p className="text-white/90 mb-8 text-2xl font-satoshibold">Kontaktinformationen</p>
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* Email Card */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#8AEA7C]/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8AEA7C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#8AEA7C] mb-1">E-Mail</h3>
                  <p className="text-white/90">info@robinwood.com</p>
                </div>

                {/* Phone Card */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#8AEA7C]/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8AEA7C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#8AEA7C] mb-1">Telefon</h3>
                  <p className="text-white/90">(555) 123-4567</p>
                </div>

                {/* Address Card */}
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#8AEA7C]/20 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8AEA7C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#8AEA7C] mb-1">Adresse</h3>
                  <p className="text-white/90">
                    123 Waldweg
                    <br />
                    Grünstadt, 95947
                  </p>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute top-[90px] left-0 flex items-center">
                  <Image src="/assets/anchor-icon.svg" alt="Anchor Icon" width={30} height={30} className="opacity-90" />
                  <span className="text-white text-2xl ml-4 ">Im Norden zuhause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Image - Hamburg Map */}
      <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2 h-full opacity-40">
        <div className="relative w-full h-full">
          <Image
            src="/assets/contact-map.png"
            alt="Inverted Map of Hamburg"
            fill
            sizes="(max-width: 768px) 66vw, 50vw"
            quality={100}
            loading="lazy"
            style={{
              objectFit: "cover",
              objectPosition: "center right",
              filter: "brightness(0.7) saturate(0.6)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0E5640]" />
        </div>
      </div>
    </section>
  );
}
