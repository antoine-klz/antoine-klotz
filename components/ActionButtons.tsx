"use client";

import { Button } from "@/components/ui/button";

type SecondaryButtonOption = "leistungen" | "team" | "projekte";

interface ActionButtonsProps {
  secondaryButton: SecondaryButtonOption;
}

export default function ActionButtons({ secondaryButton = "leistungen" }: ActionButtonsProps) {
  const secondaryButtonConfig = {
    leistungen: {
      text: "Unsere Leistungen",
      sectionId: "leistungen",
    },
    team: {
      text: "Team kennenlernen",
      sectionId: "team",
    },
    projekte: {
      text: "Projekte ansehen",
      sectionId: "projekte",
    },
  };

  const { text, sectionId } = secondaryButtonConfig[secondaryButton];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the height of the topnav (assuming it's 70px based on section's calc)
      const topnavHeight = 70;
      const offsetTop = element.offsetTop - topnavHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center">
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Secondary Button - Customizable */}
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-10 py-7 text-xl font-semibold border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          onClick={() => scrollToSection(sectionId)}
          aria-label={`Zu ${text} scrollen`}
        >
          {text}
        </Button>

        {/* Contact Button - Primary */}
        <Button
          size="lg"
          className="rounded-full px-10 py-7 text-xl font-semibold bg-[#fdff45] text-[#144723] hover:bg-[#fdff45] transition-all duration-300 shadow-[0_0_15px_rgba(138,234,124,0.3)] hover:shadow-[0_0_25px_rgba(138,234,124,0.5)]"
          onClick={() => scrollToSection("kontakt")}
          aria-label="Zum Kontaktformular scrollen"
        >
          Kontakt aufnehmen
        </Button>
      </div>
    </div>
  );
}
