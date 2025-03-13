"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Robin Wood hat unsere Bäume während des gesamten Bauprojekts professionell geschützt. Wir sind sehr zufrieden mit dem Ergebnis.",
      author: "Michael Schmidt",
      company: "Schmidt Bau GmbH",
    },
    {
      id: 2,
      quote: "Die Expertise und das Engagement für nachhaltigen Baumschutz haben uns überzeugt. Ein verlässlicher Partner für jedes Bauprojekt.",
      author: "Laura Müller",
      company: "Grüne Stadt Projekt",
    },
    {
      id: 3,
      quote: "Dank Robin Wood konnten wir alle Bäume auf unserem Grundstück erhalten und gleichzeitig unser Bauprojekt erfolgreich umsetzen.",
      author: "Thomas Weber",
      company: "Weber Immobilien",
    },
  ];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12">
          {/* Quote icon */}
          <div className="absolute top-6 left-6 text-[#8AEA7C]/30">
            <Quote size={40} />
          </div>

          {/* Testimonial content */}
          <div className="relative min-h-[200px] flex flex-col justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 absolute inset-0 flex flex-col justify-center ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <p className="text-xl md:text-2xl text-white/90 mb-6 text-center italic">&quot;{testimonial.quote}&quot;</p>
                <div className="text-center">
                  <p className="text-[#8AEA7C] font-medium">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-[#8AEA7C]/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-10 p-2 h-2 rounded-full transition-all ${index === activeIndex ? "bg-[#fdff45] w-4" : "bg-white/30"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-[#8AEA7C]/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
