"use client";

import React, { useState, useEffect, useRef } from "react";

interface StatItem {
  value: number;
  label: string;
}

interface StatsCounterProps {
  stats?: StatItem[];
  isVisible?: boolean;
  duration?: number;
  textColor?: string;
}

// Default environmental stats data
const DEFAULT_STATS = [
  { value: 250, label: "Geschützte Bäume" },
  { value: 20, label: "Zufriedene Kunden" },
  { value: 10, label: "Jahre Erfahrung" },
];

// Custom hook for animated counter
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4); // Easing function

      setCount(Math.floor(easeOutQuart * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  return { count, counterRef };
};

// Individual stat counter component
const StatCounter = ({ value, label, duration, textColor }: { value: number; label: string; duration: number; textColor: string }) => {
  const { count, counterRef } = useAnimatedCounter(value, duration);

  return (
    <div className="text-center">
      <div ref={counterRef} className="text-4xl font-bold mb-2 font-satoshibold" style={{ color: textColor }}>
        {count}+
      </div>
      <div className="text-white">{label}</div>
    </div>
  );
};

export default function StatsCounter({ stats = DEFAULT_STATS, isVisible = true, duration = 2000, textColor = "#fdff45" }: StatsCounterProps) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {stats.map((stat, index) => (
        <StatCounter key={index} value={stat.value} label={stat.label} duration={duration} textColor={textColor} />
      ))}
    </div>
  );
}
