import Link from "next/link";
import { AtSign, PhoneCall } from "lucide-react";
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
          className="rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 p-0 flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "#fdff45", color: "#144723" }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <AtSign className="w-20 h-20" />
            <span className="text-lg font-semibold font-satoshibold">KONTAKT</span>
            <PhoneCall className="w-20 h-20" />
          </div>
        </Button>
      </Link>
    </div>
  );
}
