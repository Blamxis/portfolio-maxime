"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { year: "2016", title: "Diplôme", text: "Bac STI2D ITEC" },
  { year: "2017 → 2023", title: "Expériences professionnelles", text: "Gendarmerie, usine, commerce" },
  { year: "2024", title: "Diplôme", text: "Titre RNCP DWWM" },
  { year: "2026", title: "Études", text: "Reprise BUT Informatique" },
  { year: "Projet", title: "Objectif", text: "Intégrer l’Esisar" },
];

export default function AboutTimelineDesktop() {
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
  const totalSegments = steps.length * 2 - 1;
  const endFactor = 0.75;
  const adjusted = Math.min(1, slowed / endFactor);
  const isAtEnd = progress > 0.9;
  const progressIndex = isAtEnd ? totalSegments : adjusted * totalSegments * 1.05;

  return (
    <div ref={containerRef} className="relative h-[200vh] mt-32 hidden md:block">
      
      {/* Zone sticky plus grande */}
      <div className="sticky top-0 h-[35vh] flex flex-col items-center justify-start pt-20">

        {/* Titre toujours visible */}
        <h3 className="text-4xl font-bold text-white mb-16 tracking-wide">
          Mon parcours
        </h3>

        <div className="w-full max-w-5xl mx-auto px-6">
          <div
            className="grid justify-center"
            style={{
              gridTemplateColumns: `repeat(${totalSegments}, max-content)`,
              rowGap: "30px",
              columnGap: "20px",
            }}
          >
            {/* Points + lignes */}
            {steps.map((step, i) => {
              const pointIndex = i * 2;
              const lineIndex = i * 2 + 1;

              return (
                <div key={i} className="contents">
                  <div
                    className={`
                      w-5 h-5 rounded-full mx-auto transition-all duration-500
                      ${progressIndex >= pointIndex
                        ? "bg-(--accent) shadow-[0_0_15px_rgba(34,197,94,0.9)]"
                        : "bg-(--accent)/20"}
                    `}
                  />

                  {i < steps.length - 1 && (
                    <div
                      className={`
                        h-1 w-24 sm:w-32 md:w-40 lg:w-48 transition-all duration-500
                        ${progressIndex >= lineIndex
                          ? "bg-(--accent)"
                          : "bg-(--accent)/20"}
                      `}
                    />
                  )}
                </div>
              );
            })}

            {/* Labels */}
            {steps.map((step, i) => (
              <div
                key={i}
                style={{ gridColumn: i * 2 + 1 }}
                className={`
                  text-center transition-all duration-500
                  ${progressIndex >= i * 2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"}
                `}
              >
                <p className="text-white text-base font-semibold">{step.year}</p>
                <p className="text-(--accent-soft) text-sm font-semibold mt-1">{step.title}</p>
                <p className="text-(--text-muted) text-sm mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
