"use client";

import { useCallback } from "react";
import { ProjectPin } from "@/data/Projekte";

interface ProjectLegendProps {
  pins: ProjectPin[];
  activePin?: number | null;
  onPinClick?: (pinId: number | null) => void; // Callback for when a legend item is clicked
}

export default function ProjectLegend({ pins, activePin, onPinClick }: ProjectLegendProps) {
  const handlePinClick = useCallback(
    (pinId: number) => {
      if (onPinClick) {
        // If the pin is already active, deactivate it
        onPinClick(activePin === pinId ? null : pinId);
      }
    },
    [onPinClick, activePin]
  );

  if (!pins || pins.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white/20 max-w-xs z-50 relative">
      <ul className="space-y-2">
        {pins.map((pin) => (
          <li
            key={pin.id}
            className={`flex items-center gap-3 cursor-pointer ${
              activePin === pin.id ? "bg-white/15 font-medium" : "hover:bg-white/10"
            } p-2.5 rounded-xl transition-all duration-200`}
            onClick={() => handlePinClick(pin.id)}
          >
            <div
              className={`w-3 h-3 rounded-full border border-white transition-all ${
                activePin === pin.id ? "bg-white ring-2 ring-white/50 ring-offset-1 ring-offset-transparent" : "bg-transparent"
              }`}
            />
            <span className={`text-sm ${activePin === pin.id ? "text-white" : "text-white/80"}`}>{pin.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
