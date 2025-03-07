import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  className?: string;
  position?: "absolute" | "relative";
}

export default function ContactButton({ className = "", position = "absolute" }: ContactButtonProps) {
  const positionClasses = position === "absolute" ? "absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 z-20" : "";

  return (
    <div className={`${positionClasses} ${className}`}>
      <Link href="/kontakt">
        <Button
          className="rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-0 flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "#fdff45", color: "#144723" }}
        >
          <PhoneCall size={28} className="mb-1" />
          <span className="text-sm font-semibold">Kontakt</span>
        </Button>
      </Link>
    </div>
  );
}
