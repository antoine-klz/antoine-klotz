import React from "react";
import { Trees, Recycle, Handshake } from "lucide-react";

interface ValueCardsProps {
  isVisible?: boolean;
  layout?: "grid" | "horizontal";
  iconSize?: number;
  showDescription?: boolean;
}

export default function ValueCards({ isVisible = true, layout = "grid", iconSize = 40, showDescription = true }: ValueCardsProps) {
  const values = [
    {
      icon: Trees,
      title: "Professionell",
      description: "Baumschutz nach aktuellsten Standards",
    },
    {
      icon: Recycle,
      title: "Nachhaltig",
      description: "Umweltfreundliche Materialien und Methoden",
    },
    {
      icon: Handshake,
      title: "Zuverlässig",
      description: "Termingerechte und sorgfältige Ausführung",
    },
  ];

  if (layout === "horizontal") {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4" aria-label="Unsere Kernwerte">
        {values.map((value, index) => (
          <li key={index} className="flex items-center gap-3">
            <value.icon size={iconSize} className="text-[#8AEA7C]" aria-hidden="true" />
            <span className="text-[#8AEA7C] text-xl md:text-2xl font-medium font-satoshibold">{value.title}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Unsere Kernwerte"
    >
      {values.map((value, index) => (
        <li
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 group"
        >
          <article className="flex flex-col items-center gap-4">
            <div className="bg-[#8AEA7C]/20 p-4 rounded-full group-hover:bg-[#8AEA7C]/30 transition-all duration-300" aria-hidden="true">
              <value.icon size={iconSize} className="text-[#8AEA7C]" aria-hidden="true" />
            </div>
            <h3 className="text-[#8AEA7C] text-xl md:text-2xl font-medium font-satoshibold">{value.title}</h3>
            {showDescription && <p className="text-white/80 text-sm">{value.description}</p>}
          </article>
        </li>
      ))}
    </ul>
  );
}
