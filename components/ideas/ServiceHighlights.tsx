"use client";

import React, { useState } from "react";
import { Shield, Leaf, Ruler, FileCheck, Clock, Users } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface ServiceHighlightsProps {
  className?: string;
}

export default function ServiceHighlights({ className = "" }: ServiceHighlightsProps) {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Baumschutz auf Baustellen",
      description: "Professioneller Schutz von Bäumen während Bauarbeiten gemäß aktuellen Standards und Vorschriften.",
      icon: Shield,
      color: "#8AEA7C",
    },
    {
      id: 2,
      title: "Ökologische Baubegleitung",
      description: "Umweltfreundliche Begleitung Ihres Bauprojekts mit Fokus auf Nachhaltigkeit und Naturschutz.",
      icon: Leaf,
      color: "#fdff45",
    },
    {
      id: 3,
      title: "Baumgutachten",
      description: "Fachkundige Beurteilung des Zustands und der Vitalität von Bäumen für Planungs- und Genehmigungsverfahren.",
      icon: Ruler,
      color: "#8AEA7C",
    },
    {
      id: 4,
      title: "Dokumentation",
      description: "Umfassende Dokumentation aller Maßnahmen für Behörden und Qualitätssicherung.",
      icon: FileCheck,
      color: "#fdff45",
    },
    {
      id: 5,
      title: "Langzeitbetreuung",
      description: "Kontinuierliche Betreuung und Überwachung während der gesamten Projektlaufzeit.",
      icon: Clock,
      color: "#8AEA7C",
    },
    {
      id: 6,
      title: "Beratung & Schulung",
      description: "Fachliche Beratung und Schulung für Ihr Team zu allen Aspekten des Baumschutzes.",
      icon: Users,
      color: "#fdff45",
    },
  ];

  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-7 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:transform hover:scale-105 ${
                activeService === service.id ? "ring-2 ring-[#8AEA7C]/50" : ""
              }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="flex flex-col items-start gap-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: `${service.color}20` }}>
                  <service.icon size={32} style={{ color: service.color }} />
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
