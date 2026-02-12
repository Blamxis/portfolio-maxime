"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code,
  Server,
  Database,
  Boxes,
  Wrench,
  Languages,
} from "lucide-react";

/* ----------------------------------------------------------
   Hook d’apparition (révélation)
---------------------------------------------------------- */
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ----------------------------------------------------------
   Carte de compétence (animée + icône + hover)
---------------------------------------------------------- */
function SkillCard({
  title,
  icon: Icon,
  items,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
  delay?: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group p-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm transition-all duration-700 ease-out transform hover:bg-black/60 hover:border-(--accent)/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
        <h4 className="text-white font-semibold text-lg">{title}</h4>
      </div>

      <ul className="text-(--text-muted) text-sm space-y-1">
        {items.map((item: string, i: number) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------
   Section principale AboutSkills
---------------------------------------------------------- */
export default function AboutSkills() {
  return (
    <div className="relative mt-32 mb-24 p-6 md:p-10 rounded-xl bg-black/60 border border-(--accent)/40 overflow-hidden">

      {/* Décorations */}
      <div className="absolute inset-0 pointer-events-none border-animation"></div>
      <div className="absolute inset-0 opacity-[0.05] bg-circuit-organic"></div>

      {/* Header style terminal */}
      <div className="flex items-center gap-2 mb-12 relative z-10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="ml-3 text-xs text-(--accent-soft)">terminal://skills</p>
      </div>

      {/* Titre */}
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative z-10">
        Compétences
      </h3>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

        <SkillCard
          title="Frontend"
          icon={Code}
          delay={0}
          items={[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React",
            "Next.js",
            "Responsive design",
          ]}
        />

        <SkillCard
          title="Backend"
          icon={Server}
          delay={100}
          items={[
            "Node.js",
            "Express",
            "API REST",
            "Authentification (JWT)",
          ]}
        />

        <SkillCard
          title="ORM & Base de données"
          icon={Database}
          delay={200}
          items={[
            "Sequelize",
            "Prisma",
            "Modélisation SQL",
            "Relations & migrations",
          ]}
        />

        <SkillCard
          title="Modélisation & Architecture"
          icon={Boxes}
          delay={300}
          items={[
            "Merise",
            "Factory Pattern",
            "Singleton Pattern",
            "Conception orientée objet",
          ]}
        />

        <SkillCard
          title="Outils"
          icon={Wrench}
          delay={400}
          items={[
            "Git",
            "GitHub",
            "Figma",
            "VS Code",
            "Gestion de projet",
          ]}
        />

        <SkillCard
          title="Langages"
          icon={Languages}
          delay={500}
          items={[
            "JavaScript",
            "TypeScript (bases)",
            "PHP (bases)",
            "Python (bases)",
          ]}
        />

      </div>
    </div>
  );
}
