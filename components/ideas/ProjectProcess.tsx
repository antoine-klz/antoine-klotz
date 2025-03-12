"use client";

import React, { useState } from "react";
import { Lightbulb, FileText, Calendar, Hammer, ClipboardCheck, FileCheck } from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export default function ProjectProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Unified hover color
  const hoverColor = "#fdff45";

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Erstberatung",
      description: "Kostenlose Beratung und Analyse Ihrer Anforderungen",
      icon: Lightbulb,
      color: "#FFD166", // Warm yellow
    },
    {
      id: 2,
      title: "Planung",
      description: "Detaillierte Planung und Konzepterstellung",
      icon: FileText,
      color: "#06D6A0", // Mint green
    },
    {
      id: 3,
      title: "Terminierung",
      description: "Festlegung des Zeitplans und der Ressourcen",
      icon: Calendar,
      color: "#118AB2", // Teal blue
    },
    {
      id: 4,
      title: "Umsetzung",
      description: "Professionelle Durchführung der Baumschutzmaßnahmen",
      icon: Hammer,
      color: "#EF476F", // Coral pink
    },
    {
      id: 5,
      title: "Kontrolle",
      description: "Regelmäßige Überprüfung während der Bauphase",
      icon: ClipboardCheck,
      color: "#9C89B8", // Lavender purple
    },
    {
      id: 6,
      title: "Dokumentation",
      description: "Umfassende Dokumentation aller Maßnahmen",
      icon: FileCheck,
      color: "#F78C6B", // Peach orange
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Unser Baumschutz-Prozess</h2>
          <p className="text-white/80 text-center max-w-2xl mx-auto pb-8">
            Wir begleiten Ihr Bauprojekt von der ersten Beratung bis zur finalen Dokumentation mit unserem bewährten Prozess.
          </p>
        </div>

        {/* Mobile view - vertical steps */}
        <div className="lg:hidden space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-4 rounded-lg transition-all duration-300 ${activeStep === step.id ? `bg-opacity-20 bg-[${hoverColor}]` : ""}`}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-full"
                  style={{
                    backgroundColor: activeStep === step.id ? hoverColor : "rgba(255, 255, 255, 0.1)",
                    color: activeStep === step.id ? "#0E5640" : "white",
                  }}
                >
                  <step.icon size={20} />
                </div>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
              </div>

              {activeStep === step.id && <p className="mt-2 text-white/80 pl-10">{step.description}</p>}
            </div>
          ))}
        </div>

        {/* Desktop view - horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line - adjusted to be centered with icons */}
          <div className="absolute left-0 w-full h-0.5 bg-white/20" style={{ top: "calc(-20px + 6px)" }}></div>

          <div className="flex justify-between relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center relative"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === step.id ? hoverColor : "rgba(255, 255, 255, 0.1)",
                    color: activeStep === step.id ? "#0E5640" : "white",
                    transform: activeStep === step.id ? "scale(1.25)" : "scale(1)",
                    position: "relative",
                    top: "-20px",
                  }}
                >
                  <step.icon size={24} />
                </div>

                {/* Step title */}
                <h3
                  className="mt-4 text-center font-medium transition-all duration-300"
                  style={{
                    color: activeStep === step.id ? hoverColor : "white",
                    marginTop: "-8px", // Adjust to account for the raised circle
                  }}
                >
                  {step.title}
                </h3>

                {/* Step description - only visible when active */}
                <div
                  className={`absolute p-3 rounded backdrop-blur-sm transition-all duration-300 z-20 w-48 text-center ${
                    activeStep === step.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{
                    backgroundColor: "rgba(14, 86, 64, 0.9)",
                    borderColor: `${hoverColor}50`,
                    borderWidth: "1px",
                    top: "100%",
                    marginTop: "0.5rem",
                  }}
                >
                  <p className="text-sm text-white/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
