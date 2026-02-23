"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Rocket, ShieldCheck, Code2 } from "lucide-react";

/* Hook d’apparition */
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

/* Section animée */
function Section({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

export default function AboutGoal() {
  return (
    <div className="relative mt-32 mb-24 p-6 md:p-10 rounded-xl bg-black/60 border border-(--accent)/40 overflow-hidden">

      {/* Décorations */}
      <div className="absolute inset-0 pointer-events-none border-animation"></div>
      <div className="absolute inset-0 opacity-[0.05] bg-circuit-organic"></div>

      {/* Header terminal */}
      <div className="flex items-center gap-2 mb-12 relative z-10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="ml-3 text-xs text-(--accent-soft)">terminal://goals</p>
      </div>

      {/* Titre */}
      <Section delay={0}>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Objectifs
        </h3>
        <p className="text-(--accent-soft) text-lg mb-10">
          Une progression structurée : consolider mes bases, viser l’excellence, construire une carrière solide.
        </p>
      </Section>

      {/* Texte principal */}
      <Section delay={150}>
        <p className="text-(--text-muted) leading-relaxed text-base md:text-lg text-justify max-w-4xl mb-12">
          En tant que développeur Full‑Stack junior orienté backend, mon objectif prioritaire est 
          d’intégrer le <strong>BUT Informatique de l’IUT de Valence</strong>. Cette formation représente 
          pour moi une étape essentielle pour renforcer mes bases en algorithmique, systèmes, réseaux, 
          bases de données et conception logicielle. 
          <br /><br />
          Une fois le BUT validé, je souhaite poursuivre vers l’<strong>Esisar</strong> afin de me spécialiser 
          en ingénierie logicielle ou en cybersécurité. Mon ambition est d’évoluer dans des environnements 
          exigeants, de travailler sur des systèmes critiques et de contribuer à des projets à forte valeur 
          technologique.
        </p>
      </Section>

      {/* Liste d’objectifs animée */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {/* Objectif 1 : BUT Informatique */}
        <Section delay={250}>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-black/40 border border-white/10 hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300">
            <Target className="w-8 h-8 text-(--accent) shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Intégrer le BUT Informatique</h4>
              <p className="text-(--text-muted) text-sm leading-relaxed">
                Rejoindre l’IUT de Valence pour consolider mes fondamentaux : algorithmique, systèmes, réseaux,
                bases de données et bonnes pratiques de développement.
              </p>
            </div>
          </div>
        </Section>

        {/* Objectif 2 : Esisar */}
        <Section delay={350}>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-black/40 border border-white/10 hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300">
            <Rocket className="w-8 h-8 text-(--accent) shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Préparer l’entrée à l’Esisar</h4>
              <p className="text-(--text-muted) text-sm leading-relaxed">
                Viser une école d’ingénieurs exigeante après le BUT afin de monter en compétence sur des sujets avancés.
              </p>
            </div>
          </div>
        </Section>

        {/* Objectif 3 : Spécialisation */}
        <Section delay={450}>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-black/40 border border-white/10 hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300">
            <ShieldCheck className="w-8 h-8 text-(--accent) shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Me spécialiser</h4>
              <p className="text-(--text-muted) text-sm leading-relaxed">
                Développer une expertise en cybersécurité ou en ingénierie logicielle avancée.
              </p>
            </div>
          </div>
        </Section>

        {/* Objectif 4 : Projets ambitieux */}
        <Section delay={550}>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-black/40 border border-white/10 hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300">
            <Code2 className="w-8 h-8 text-(--accent) shrink-0" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Contribuer à des projets ambitieux</h4>
              <p className="text-(--text-muted) text-sm leading-relaxed">
                Participer à la conception de systèmes robustes, sécurisés et à forte valeur technologique.
              </p>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
