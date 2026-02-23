"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { year: "2016", title: "Diplôme", text: "Baccalauréat STI2D ITEC" },
  { year: "2017 → 2023", title: "Expériences professionnelles", text: "Gendarmerie, usine, commerce" },
  { year: "2024", title: "Diplôme", text: "Titre RNCP DWWM" },
  { year: "2026", title: "Études", text: "Reprise BUT Informatique" },
  { year: "Projet", title: "Objectif", text: "Intégrer l’Esisar" },
];

export default function AboutTimelineTablet() {
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
  const progressIndex = adjusted * steps.length;

  return (
    <div ref={containerRef} className="hidden md:block lg:hidden mt-32 mb-24">
      
      <h3 className="text-3xl font-bold text-white mb-12 text-center">
        Mon parcours
      </h3>

      <div className="relative max-w-2xl mx-auto pl-8 border-l-2 border-(--accent)/30">

        {steps.map((step, i) => {
          const visible = progressIndex >= i;

          return (
            <div key={i} className="relative mb-14">

              {/* Point */}
              <div
                className={`
                  absolute -left-3.5 w-5 h-5 rounded-full transition-all duration-500
                  ${visible
                    ? "bg-(--accent) shadow-[0_0_15px_rgba(34,197,94,0.9)]"
                    : "bg-(--accent)/20"}
                `}
              />

              {/* Contenu */}
              <div
                className={`
                  transition-all duration-500 pl-4
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                <p className="text-white text-lg font-semibold">{step.year}</p>
                <p className="text-(--accent-soft) text-sm font-semibold mt-1">{step.title}</p>
                <p className="text-(--text-muted) text-sm mt-1">{step.text}</p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
