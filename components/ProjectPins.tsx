"use client";
import React, { useState } from "react";
import { ProjectPin } from "@/data/Projekte";

interface ProjectPinsProps {
  pins: ProjectPin[];
}

export default function ProjectPins({ pins }: ProjectPinsProps) {
  const [activePopover, setActivePopover] = useState<number | null>(null);

  return (
    <>
      {pins.map((pin) => (
        <div key={pin.id} className="absolute z-20" style={{ top: pin.top, left: pin.left }}>
          <button
            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg transform hover:scale-110 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              setActivePopover(activePopover === pin.id ? null : pin.id);
            }}
            aria-label={`Show details for ${pin.name}`}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>

          {/* Popover */}
          {activePopover === pin.id && (
            <div className="absolute z-30 bg-white text-black rounded-md shadow-xl p-4 w-64 -translate-x-1/2 mt-2">
              <h4 className="font-bold text-lg text-[#0E5640]">{pin.name}</h4>
              <p className="text-sm mt-1">{pin.address}</p>
              <p className="text-sm font-medium mt-2">Jahr: {pin.year}</p>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePopover(null);
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
