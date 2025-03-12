import ActionButtons from "@/components/ActionButtons";
import { Trees } from "lucide-react";
import { LockIcon } from "lucide-react";

export default function LeistungenPage() {
  return (
    <div className="relative h-[calc(100vh-72px)] flex flex-col">
      <main className="flex-1 px-4 md:px-6 lg:px-8 py-8 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto h-full flex flex-col justify-between relative before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:opacity-30 before:blur-[80px]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
            {/* Larger Box - 2/3 width */}
            <div
              className="lg:col-span-2 p-10 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col justify-center"
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
            <div className="p-10 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col justify-center" style={{ backgroundColor: "#DCFCD7" }}>
              <h2 className="text-3xl font-semibold tracking-tighter mb-6 text-[#144723] flex items-center gap-2">
                <LockIcon size={24} />
                Sicherheit
              </h2>
              <p className="text-lg font-light text-[#144723]">
                Ihre Sicherheit steht bei uns an erster Stelle. Wir arbeiten nach den höchsten Sicherheitsstandards.
              </p>
            </div>
          </div>
          {/* Bottom Content Area - Using the ActionButtons component */}
          <div className="mt-8">
            <ActionButtons secondaryButton="team" />
          </div>
        </div>
      </main>
    </div>
  );
}
