"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { year: "2016", title: "Diplôme", text: "Bac STI2D ITEC" },
  { year: "2017 → 2023", title: "Expériences professionnelles", text: "Gendarmerie, usine, commerce" },
  { year: "2024", title: "Diplôme", text: "Titre RNCP DWWM" },
  { year: "2026", title: "Études", text: "Reprise BUT Informatique" },
  { year: "Projet", title: "Objectif", text: "Intégrer l’Esisar" },
];

export default function AboutTimelineMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height + windowHeight;
      const raw = (windowHeight - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const slowed = progress ** 1.4;
  const endFactor = 0.75;
  const adjusted = Math.min(1, slowed / endFactor);
  const isAtEnd = progress > 0.9;
  const mobileProgress = isAtEnd ? 1 : adjusted * 1.05;

  return (
    <div ref={containerRef} className="block md:hidden mt-24 mb-20 min-h-[140vh]">
      <h3 className="text-3xl font-bold text-white mb-10 text-center">Mon parcours</h3>

      <div className="sticky top-24">
        <div className="relative ml-6">
          <div className="absolute left-2 top-0 w-0.5 h-full bg-(--accent)/20"></div>

          {steps.map((step, i) => {
            const threshold = i / (steps.length - 1);
            const adjustedThreshold = i === steps.length - 1 ? 0.92 : threshold;
            const isActive = mobileProgress >= adjustedThreshold;

            return (
              <div key={i} className="relative mb-10 flex items-start gap-4">
                <div
                  className={`
                    w-4 h-4 rounded-full transition-all duration-500
                    ${isActive
                      ? "bg-(--accent) shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                      : "bg-(--accent)/20"}
                  `}
                />

                <div
                  className={`
                    transition-all duration-500
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}
                >
                  <p className="text-white text-sm font-semibold">{step.year}</p>
                  <p className="text-(--accent-soft) text-xs font-semibold mt-1">{step.title}</p>
                  <p className="text-(--text-muted) text-xs mt-1">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
