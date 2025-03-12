export default function KontaktPage() {
  return (
    <>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-[#144723] mb-6">Kontakt</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#144723] mb-4">Kontaktieren Sie uns</h2>
              <p className="mb-6">
                Wir freuen uns, von Ihnen zu hören. Bitte füllen Sie das Formular aus oder kontaktieren Sie uns über die unten stehenden
                Informationen.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-[#144723]">E-Mail</h3>
                  <p>info@robinwood.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#144723]">Telefon</h3>
                  <p>(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#144723]">Adresse</h3>
                  <p>
                    123 Waldweg
                    <br />
                    Grünstadt, 95947
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#144723] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#144723]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#144723] mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#144723]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#144723] mb-1">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#144723]"
                  ></textarea>
                </div>
                <button type="submit" className="bg-[#144723] text-white px-6 py-2 rounded-md hover:bg-[#0d3118] transition-colors">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
