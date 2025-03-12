import ActionButtons from "@/components/ActionButtons";
import { Trees, LockIcon } from "lucide-react";

export default function LeistungenPage() {
  return (
    <main className="py-12 px-4 md:px-6 lg:px-8 pt-16 relative min-h-[calc(100vh-72px)]">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-[#8AEA7C] mb-6">Unsere Leistungen</h1>
        <p className="text-xl mb-4 text-white">
          Wir bieten umfassende Lösungen für die Pflege und Wartung Ihrer Bäume mit modernster Ausrüstung und erfahrenen Fachkräften.
        </p>
        <div className="max-w-5xl mx-auto mt-16 relative before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:opacity-30 before:blur-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Larger Box - 2/3 width */}
            <div
              className="lg:col-span-2 p-10 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-center"
              style={{ backgroundColor: "#8AEA7C" }}
            >
              <h2 className="text-3xl font-semibold tracking-tighter mb-6 flex items-center gap-2" style={{ color: "#144723" }}>
                <Trees size={24} />
                Professionelle Baumpflege
              </h2>
              <p className="text-lg font-light text-[#144723]">
                Wir bieten umfassende Lösungen für die Pflege und Wartung Ihrer Bäume mit modernster Ausrüstung und erfahrenen Fachkräften.
              </p>
            </div>
            {/* Smaller Box - 1/3 width */}
            <div className="p-10 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-center" style={{ backgroundColor: "#DCFCD7" }}>
              <h2 className="text-3xl font-semibold tracking-tighter mb-6 text-[#144723] flex items-center gap-2">
                <LockIcon size={24} />
                Sicherheit
              </h2>
              <p className="text-lg font-light text-[#144723]">
                Ihre Sicherheit steht bei uns an erster Stelle. Wir arbeiten nach den höchsten Sicherheitsstandards.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ActionButtons secondaryButton="team" />
        </div>
      </div>
    </main>
  );
}
