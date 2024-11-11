"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, PhoneCall, Rainbow, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlockPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-[#144723] pt-20 relative before:absolute before:content-[''] before:w-full before:h-screen before:top-0 before:left-0 before:bg-gradient-to-br before:from-[#13d24c] before:via-[#0b3617] before:to-[#8AEA7C] before:opacity-30 before:blur-[80px]">
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-0">
          <div className="mt-8 lg:mt-20 flex flex-col lg:flex-row h-full lg:justify-between">
            <div className="flex flex-col lg:w-1/2 justify-between mb-8 lg:mb-0">
              <p className="text-[#8AEA7C] mb-8 lg:mb-10">WILKOMMEN</p>
              <div>
                <h1 className="mb-2 text-4xl text-balance font-semibold tracking-tighter text-[#DCFCD7] sm:text-5xl xl:text-6xl/none">
                  Robin Wood ihr Partner rund um Baumpflege
                </h1>
              </div>
              <h2 className="text-sm flex flex-row items-center gap-2 mb-8 lg:mb-44">
                <Trees size={24} color="#fdff45" />
                <p className="text-lg font-light text-[#DCFCD7]">
                  Bringing intelligence to plant care
                </p>
              </h2>
            </div>
            <div className="relative justify-center lg:justify-start mb-24 lg:mb-0 sm:w-1/2">
              <div className="relative rounded-full">
                <Image
                  src="/assets/heroimage.jpeg"
                  alt="Robin Wood Logo"
                  width={500}
                  height={500}
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-4 md:left-0 left-20 -translate-x-1/2 lg:left-240 lg:translate-x-0 w-40 h-40 bg-[#fdff45] rounded-full flex items-center justify-center">
                <div className="flex flex-col items-center space-y-2">
                  <ArrowUpRight size={24} color="#144723" />
                  <div className="text-black font-semibold hover:underline">
                    Kontakt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
