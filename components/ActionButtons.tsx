import { Button } from "@/components/ui/button";
import Link from "next/link";

type SecondaryButtonOption = "leistungen" | "team";

interface ActionButtonsProps {
  secondaryButton: SecondaryButtonOption;
}

export default function ActionButtons({ secondaryButton = "leistungen" }: ActionButtonsProps) {
  const secondaryButtonConfig = {
    leistungen: {
      text: "Unsere Leistungen",
      href: "/leistungen",
    },
    team: {
      text: "Unser Team",
      href: "/team",
    },
  };

  const { text, href } = secondaryButtonConfig[secondaryButton];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center ">
        {/* Secondary Button - Customizable */}
        <Link href={href}>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 py-7 text-xl font-semibold border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            {text}
          </Button>
        </Link>

        {/* Contact Button - Primary */}
        <Link href="/kontakt">
          <Button
            size="lg"
            className="rounded-full px-10 py-7 text-xl font-semibold bg-[#fdff45] text-[#144723] hover:bg-[#fdff45] transition-all duration-300 shadow-[0_0_15px_rgba(138,234,124,0.3)] hover:shadow-[0_0_25px_rgba(138,234,124,0.5)]"
          >
            Kontakt aufnehmen
          </Button>
        </Link>
      </div>
    </div>
  );
}
