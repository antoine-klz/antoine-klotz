"use client";

import { Button } from "@/components/ui/button";
import { Rainbow, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlockPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#144723" }}>
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Robin Wood ihr Partner rund um Baumpflege
            </h1>
            <div className="flex items-center gap-2 text-yellow">
              <Trees size={24} />
              <p className="text-sm">Bringing intelligence to plant care</p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Tree Care"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-lg text-white/80">
              Let us take care of your trees with professional expertise
            </p>
            <Button
              className="rounded-full px-8 py-4 text-lg font-medium"
              style={{ backgroundColor: "#fdff45", color: "#144723" }}
            >
              Kontakt
            </Button>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="container px-4 py-12 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Larger Box - 2/3 width */}
          <div
            className="lg:col-span-2 p-8 rounded-lg"
            style={{ backgroundColor: "#fdff45" }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#144723" }}
            >
              Professionelle Baumpflege
            </h2>
            <p className="text-lg" style={{ color: "#3a5634" }}>
              Wir bieten umfassende Lösungen für die Pflege und Wartung Ihrer
              Bäume mit modernster Ausrüstung und erfahrenen Fachkräften.
            </p>
          </div>
          {/* Smaller Box - 1/3 width */}
          <div
            className="p-8 rounded-lg"
            style={{ backgroundColor: "#74ab77" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Sicherheit</h2>
            <p className="text-lg text-white">
              Ihre Sicherheit steht bei uns an erster Stelle. Wir arbeiten nach
              den höchsten Sicherheitsstandards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
