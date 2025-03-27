import React from "react";

export default function Kontakt() {
  return (
    <section id="contact" className="w-full min-h-[calc(100vh-65px)] relative bg-white flex">
      <div className="flex-1 px-4 md:px-6 lg:px-8 pt-10 relative z-10 h-full md:pt-24 ">
        <div className="mx-auto max-w-6xl h-full flex flex-col ">
          <h2 className="text-5xl font-satoshibold text-black mb-6">Kontakt</h2>

          {/* Accent line */}
          <div className="flex mb-8">
            <div className="w-24 h-1 bg-[#F65009]"></div>
          </div>

          <p className="text-black/90 md:w-1/2 mb-8">
            Wir freuen uns, von Ihnen zu hören. Bitte füllen Sie das Formular aus oder kontaktieren Sie uns über die unten stehenden Informationen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {/* Contact Form - First on mobile, second on desktop */}
            <div className="md:order-2 order-1">
              <div className="bg-white shadow-md p-6 rounded-xl border border-black/10 mb-10 md:mb-0">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F65009] text-black placeholder-black/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F65009] text-black placeholder-black/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F65009] text-black placeholder-black/50"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-[#F65009] text-white px-6 py-2 rounded-lg hover:bg-[#F65009]/90 transition-colors font-medium">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Second on mobile, first on desktop */}
            <div className="md:order-1 order-2 flex flex-col">
              <p className="text-black mb-8 text-2xl font-satoshibold">Kontaktinformationen</p>
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/+491634286596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-xl border border-black/10 shadow-sm flex flex-col items-center text-center hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F65009]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F65009]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">WhatsApp</h3>
                  <p className="text-black text-sm">Chat mit uns</p>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@robinwood.com"
                  className="bg-white p-5 rounded-xl border border-black/10 shadow-sm flex flex-col items-center text-center hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F65009]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F65009]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">E-Mail</h3>
                  <p className="text-black text-sm">info@robinwood.com</p>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+555-123-4567"
                  className="bg-white p-5 rounded-xl border border-black/10 shadow-sm flex flex-col items-center text-center hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F65009]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F65009]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">Telefon</h3>
                  <p className="text-black text-sm">(555) 123-4567</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
