"use client";

import Image from "next/image";

export default function AboutIdentity() {
  return (
    <div className="relative mb-24 p-6 md:p-10 rounded-xl bg-black/60 border border-(--accent)/40 overflow-hidden animate-fadeInUp">

      {/* Décorations */}
      <div className="absolute inset-0 pointer-events-none border-animation"></div>
      <div className="absolute inset-0 opacity-[0.07] bg-circuit-organic"></div>

      {/* Header terminal */}
      <div className="flex items-center gap-2 mb-10 relative z-10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="ml-3 text-xs text-(--accent-soft)">terminal://identity</p>
      </div>

      {/* Contenu */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">

        {/* Photo */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_0_25px_rgba(34,197,94,0.5)] shrink-0">
          <Image
            src="/images/pdp.jpg"
            alt="Photo de Maxime"
            fill
            sizes="200px"
            priority
            className="object-cover object-[center_25%]"
          />
        </div>

        {/* Texte */}
        <div className="flex-1 space-y-5">

          <h3 className="text-3xl font-semibold text-white">Qui suis‑je ?</h3>

          <p className="text-(--text-muted) leading-relaxed text-justify">
            Je m’appelle <span className="text-white font-semibold">Maxime Gavinet</span>, développeur web junior passionné par la création d’expériences numériques modernes, propres et bien structurées. 
            J’aime comprendre comment les choses fonctionnent, optimiser ce qui peut l’être et apprendre en continu. 
            Mon parcours atypique m’a donné une vraie capacité d’adaptation, une rigueur naturelle et une vision très humaine du travail.
          </p>

          <p className="text-(--text-muted) leading-relaxed text-justify">
            Je suis également reconnu{" "}
            <span className="relative group text-(--accent) font-medium cursor-help">
              RQTH
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-3 rounded-lg bg-black/90 border border-(--accent)/40 text-sm text-(--text-muted) opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-[0_0_15px_rgba(34,197,94,0.3)] backdrop-blur-sm z-20">
                <span className="block text-white font-semibold mb-1">Reconnaissance de la Qualité de Travailleur Handicapé</span>
                <span className="block">• Obtention : 2026</span>
                <span className="block">• Motif : troubles psychiques</span>
              </span>
            </span>
            , ce qui m’a appris à mieux me connaître, à structurer mon travail et à développer une vraie discipline personnelle.
          </p>

          <p className="text-(--text-muted) leading-relaxed text-justify">
            Aujourd’hui, je me prépare à intégrer un BUT Informatique afin de renforcer mes bases en algorithmique, systèmes et réseaux. 
            Mon objectif est clair : rejoindre l’Esisar pour me spécialiser en cybersécurité ou en ingénierie logicielle avancée. 
            Je veux évoluer dans un environnement exigeant, apprendre auprès de personnes brillantes et contribuer à des projets à forte valeur technologique.
          </p>

          <p className="text-(--text-muted) leading-relaxed text-justify">
            Au‑delà du code, je suis quelqu’un de curieux, persévérant, passionné par la compréhension des systèmes et motivé par l’idée de construire des solutions utiles, élégantes et durables.
          </p>

        </div>
      </div>
    </div>
  );
}
