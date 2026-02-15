"use client";

import { useEffect, useRef, useState } from "react";

/* ----------------------------------------------------------
   Hook d'apparition (révélation)
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
   Composant Section (animation desktop)
---------------------------------------------------------- */
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

/* ----------------------------------------------------------
   Composant MobileSection (accordéon mobile)
---------------------------------------------------------- */
function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg bg-black/40 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-semibold"
      >
        {title}
        <span
          className={`transition-transform text-xl ${
            open ? "rotate-90" : ""
          }`}
        >
          ›
        </span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-(--text-muted) text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   Composant principal AboutCV
---------------------------------------------------------- */
export default function AboutCV() {
  return (
    <div className="relative mt-32 mb-24 p-6 md:p-10 rounded-xl bg-black/60 border border-(--accent)/40 overflow-hidden animate-fadeInUp">
      
      {/* Décorations */}
      <div className="absolute inset-0 pointer-events-none border-animation"></div>
      <div className="absolute inset-0 opacity-[0.05] bg-circuit-organic"></div>

      {/* Header style terminal */}
      <div className="flex items-center gap-2 mb-12 relative z-10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="ml-3 text-xs text-(--accent-soft)">terminal://cv</p>
      </div>

      {/* TITRE */}
      <Section delay={0}>
        <header className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Curriculum Vitae
          </h3>
          <p className="text-(--text-muted) mt-3 text-lg">
            Développeur Full‑Stack junior — Profil professionnel, compétences, expériences et objectifs.
          </p>
        </header>
      </Section>

      {/* ----------------------------------------------------------
         VERSION DESKTOP (2 colonnes)
      ---------------------------------------------------------- */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">

        {/* COLONNE GAUCHE */}
        <div className="space-y-10 md:space-y-16 lg:col-span-1">

          <Section delay={100}>
            <section className="space-y-4">
              <h4 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
                Profil professionnel
              </h4>
              <p className="text-(--text-muted) leading-relaxed text-justify">
                Développeur Full‑Stack junior orienté backend. Je me débrouille bien avec React, Next.js,
                Node.js, Sequelize et Prisma. J’ai également des bases en PHP et Python.  
                Actuellement en transition vers un BUT Informatique afin de renforcer mes compétences fondamentales (algorithmique, systèmes, réseaux) et viser l’Esisar pour me spécialiser en ingénierie logicielle ou cybersécurité.
              </p>
            </section>
          </Section>

          <Section delay={200}>
            <section className="space-y-6">
              <h4 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
                Compétences techniques
              </h4>

              <div className="space-y-6">

                <div>
                  <h5 className="text-white font-semibold mb-2">Frontend</h5>
                  <ul className="text-(--text-muted) text-sm space-y-1">
                    <li>HTML5, CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React, Next.js</li>
                    <li>Responsive design</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Backend</h5>
                  <ul className="text-(--text-muted) text-sm space-y-1">
                    <li>Node.js, Express</li>
                    <li>Sequelize, Prisma</li>
                    <li>API REST</li>
                    <li>PHP (bases)</li>
                    <li>Python (bases)</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Modélisation & Architecture</h5>
                  <ul className="text-(--text-muted) text-sm space-y-1">
                    <li>Merise</li>
                    <li>Patterns : Factory, Singleton</li>
                    <li>Conception orientée objet</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Outils & Méthodes</h5>
                  <ul className="text-(--text-muted) text-sm space-y-1">
                    <li>Git, GitHub</li>
                    <li>Figma</li>
                    <li>Gestion de projet</li>
                    <li>Veille technologique</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Cybersécurité</h5>
                  <ul className="text-(--text-muted) text-sm space-y-1">
                    <li>Débutant (en apprentissage)</li>
                    <li>Notions réseau (bases)</li>
                    <li>Objectif : spécialisation Esisar</li>
                  </ul>
                </div>

              </div>
            </section>
          </Section>

        </div>

        {/* COLONNE DROITE */}
        <div className="space-y-10 md:space-y-16 lg:col-span-2">

          <Section delay={300}>
            <section className="space-y-6">
              <h4 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
                Expériences professionnelles
              </h4>

              <div className="space-y-8">
                <div>
                  <p className="text-white font-semibold text-lg">Gendarmerie Nationale</p>
                  <p className="text-(--accent-soft) text-sm">2017 – 2019</p>
                  <p className="text-(--text-muted) text-sm mt-2 leading-relaxed">
                    Discipline, gestion de situations complexes, travail d’équipe, sens des responsabilités.
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">Travail Alimentaire</p>
                  <p className="text-(--accent-soft) text-sm">2019 – 2020</p>
                  <p className="text-(--text-muted) text-sm mt-2 leading-relaxed">
                    Rigueur, cadence, respect des normes, adaptation à un environnement exigeant.
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">Commerce</p>
                  <p className="text-(--accent-soft) text-sm">2020 – 2023</p>
                  <p className="text-(--text-muted) text-sm mt-2 leading-relaxed">
                    Relation client, communication, polyvalence, gestion de caisse.
                  </p>
                </div>
              </div>
            </section>
          </Section>

          <Section delay={400}>
            <section className="space-y-6">
              <h4 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
                Formations
              </h4>

              <div className="space-y-6">
                <div>
                  <p className="text-white font-semibold text-lg">Bac STI2D ITEC</p>
                  <p className="text-(--accent-soft) text-sm">Lycée Les Catalins — 2016</p>
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">Titre RNCP Développeur Web & Web Mobile</p>
                  <p className="text-(--accent-soft) text-sm">STUDI — 2024</p>
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">BUT Informatique (en cours)</p>
                  <p className="text-(--accent-soft) text-sm">IUT Valence — 2026</p>
                </div>
              </div>
            </section>
          </Section>

          <Section delay={500}>
            <section className="space-y-4">
              <h4 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
                Objectif professionnel
              </h4>
              <p className="text-(--text-muted) leading-relaxed text-justify">
                Développeur junior motivé, je souhaite intégrer l’Esisar pour progresser en cybersécurité
                ou en ingénierie logicielle et travailler sur des systèmes critiques et sécurisés.
              </p>
            </section>
          </Section>

          <Section delay={600}>
            <div className="pt-4">
              <a
                href="/CV-GAVINET-MAXIME-2026.pdf"
                download
                className="inline-block px-8 py-3 rounded-lg bg-(--accent) text-black font-semibold shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all"
              >
                Télécharger mon CV complet (PDF)
              </a>
            </div>
          </Section>

        </div>
      </div>

      {/* ----------------------------------------------------------
         VERSION MOBILE (cartes compactes + accordéons)
      ---------------------------------------------------------- */}
      <div className="block md:hidden space-y-6 relative z-10">

        <MobileSection title="Profil professionnel">
          <p>
            Développeur Full‑Stack junior orienté backend. Je me débrouille bien avec React, Next.js,
            Node.js, Sequelize et Prisma. Bases en PHP et Python. En transition vers un BUT Info pour
            viser l’Esisar.
          </p>
        </MobileSection>

        <MobileSection title="Compétences techniques">
          <ul className="space-y-2">
            <li><strong>Frontend :</strong> HTML, CSS, JS, React, Next.js</li>
            <li><strong>Backend :</strong> Node.js, Express, Sequelize, Prisma</li>
            <li><strong>Modélisation :</strong> Merise, Factory, Singleton</li>
            <li><strong>Outils :</strong> Git, GitHub, Figma</li>
            <li><strong>Cybersécurité :</strong> Débutant (objectif Esisar)</li>
          </ul>
        </MobileSection>

        <MobileSection title="Expériences professionnelles">
          <ul className="space-y-3">
            <li>
              <strong>Gendarmerie (2017–2019)</strong><br />
              Discipline, gestion de situations complexes, travail d’équipe.
            </li>
            <li>
              <strong>Travail alimentaire (2019–2020)</strong><br />
              Rigueur, cadence, respect des normes.
            </li>
            <li>
              <strong>Commerce (2020–2023)</strong><br />
              Relation client, polyvalence, communication.
            </li>
          </ul>
        </MobileSection>

        <MobileSection title="Formations">
          <ul className="space-y-3">
            <li><strong>Bac STI2D ITEC</strong> — 2016</li>
            <li><strong>RNCP DWWM</strong> — 2024</li>
            <li><strong>BUT Informatique (en cours)</strong> — 2026</li>
          </ul>
        </MobileSection>

        <MobileSection title="Objectif professionnel">
          <p>
            Développeur junior motivé, je souhaite intégrer l’Esisar pour progresser en cybersécurité
            ou ingénierie logicielle et travailler sur des systèmes critiques et sécurisés.
          </p>
        </MobileSection>

        <a
          href="/CV-GAVINET-MAXIME-2026.pdf"
          download
          className="inline-block w-full text-center px-6 py-3 rounded-lg bg-(--accent) text-black font-semibold shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all"
        >
          Télécharger mon CV complet (PDF)
        </a>

      </div>
    </div>
  );
}
