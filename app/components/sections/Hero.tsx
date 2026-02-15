export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* --- FOND CIRCUIT IMPRIMÉ COMPLET --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Dégradé néon animé */}
            <linearGradient id="neonStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,197,94,0)" />
              <stop offset="50%" stopColor="rgba(34,197,94,1)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0)" />
            </linearGradient>

            {/* Style interne */}
            <style>
              {`
                .pcb-line {
                  stroke: rgba(34,197,94,0.28);
                  stroke-width: 1.1;
                  fill: none;
                }

                .neon-path {
                  stroke: url(#neonStroke);
                  stroke-width: 2;
                  fill: none;
                  stroke-dasharray: 300;
                  animation: neonFlow 4s linear infinite;
                }
              `}
            </style>

            {/* PATTERN COMPLET */}
            <pattern
              id="pcbPattern"
              width="300"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              <path d="M20 40 H120 V80 H200 V140 H140 V200 H60" className="pcb-line" />
              <path d="M260 30 V110 H320 V170 H280" className="pcb-line" />
              <path d="M40 260 H140 V300 H220 V360 H160 V420 H80" className="pcb-line" />
              <path d="M100 500 H200 V540 H260 V600 H180" className="pcb-line" />

              <path d="M20 40 H120 V80 H200" className="neon-path" />
              <path d="M260 30 V110 H320" className="neon-path" />
              <path d="M40 260 H140 V300" className="neon-path" />
              <path d="M100 500 H200 V540" className="neon-path" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#pcbPattern)" />
        </svg>
      </div>

      {/* Glow central */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-4 translate-y-12.5 md:translate-y-0">
        <p className="text-xs uppercase tracking-[0.3em] text-(--accent-soft) mb-3">
          Développeur Web — Futur Étudiant en Informatique
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          En apprentissage constant, avec l’ambition d’aller loin.
        </h1>

        <p className="text-sm md:text-base text-(--text-muted) max-w-xl mx-auto">
          Je conçois des projets modernes, j’améliore mes compétences chaque jour
          et je prépare ma reprise d’études pour évoluer vers l’ingénierie
          informatique. Découvrez mes réalisations, mon parcours et ma vision.
        </p>

        <a
          href="#projects"
          className="
            inline-block mt-6 px-5 py-2 rounded-md border border-(--accent)
            text-(--accent) text-sm font-medium
            hover:bg-(--accent) hover:text-black
            transition-all shadow-[0_0_10px_rgba(34,197,94,0.25)]
          "
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}
