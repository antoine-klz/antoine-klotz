import { Trees } from "lucide-react";
import { LockIcon } from "lucide-react";
import ContactButton from "@/components/ContactButton";

export default function LeistungenPage() {
  return (
    <>
      <div className="relative">
        {/* Contact Button */}
        <ContactButton />

        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 pt-20">
          <div className="overflow-x-hidden bg-white pt-20 relative before:absolute before:content-[''] before:w-full before:h-screen before:top-0 before:left-0  before:opacity-30 before:blur-[80px]">
            <section className="w-full max-w-5xl mx-auto px-6 lg:px-0 py-20">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Larger Box - 2/3 width */}
                <div className="lg:col-span-2 p-10 rounded-2xl shadow-lg" style={{ backgroundColor: "#8AEA7C" }}>
                  <h2
                    className="lg:col-span-1 text-3xl font-semibold tracking-tighter mb-6 flex flex-row items-center gap-2"
                    style={{ color: "#144723" }}
                  >
                    <Trees size={24} />
                    Professionelle Baumpflege
                  </h2>
                  <p className="text-lg font-light text-[#144723] ">
                    Wir bieten umfassende Lösungen für die Pflege und Wartung Ihrer Bäume mit modernster Ausrüstung und erfahrenen Fachkräften.
                  </p>
                </div>
                {/* Smaller Box - 1/3 width */}
                <div className="p-10 rounded-2xl shadow-lg" style={{ backgroundColor: "#DCFCD7" }}>
                  <h2 className="text-3xl font-semibold tracking-tighter mb-6 text-[#144723] flex flex-row items-center gap-2">
                    <LockIcon size={24} />
                    Sicherheit
                  </h2>
                  <p className="text-lg font-light text-[#144723]">
                    Ihre Sicherheit steht bei uns an erster Stelle. Wir arbeiten nach den höchsten Sicherheitsstandards.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
