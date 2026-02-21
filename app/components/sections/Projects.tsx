export default function Projects() {
  const projects = [
    {
      title: "Fresh Agency — Site vitrine professionnel",
      description:
        "Site web moderne réalisé pour un client avec React, TypeScript et TailwindCSS. Intégration responsive, design personnalisé et mise en production complète.",
      tech: "Stack : React, TypeScript, TailwindCSS — déployé sur Hostinger.",
      status: "Terminé",
      statusColor: "green",
      tags: ["Client", "React", "TypeScript", "TailwindCSS", "Responsive"],
      github: null, // code privé
      demo: "https://fresh-agency.fr/",
    },

    {
      title: "HACKTOOL 1.0 — Scanner de ports Python",
      description:
        "Un scanner de ports rapide et personnalisable permettant d’identifier les ports ouverts d’une machine cible, avec détection automatique des services et affichage coloré.",
      tech: "Tech : Python, sockets, threading, colorama.",
      status: "Terminé",
      statusColor: "green",
      tags: ["Python", "Réseau", "Cyber", "CLI", "TCP"],
      github: "https://github.com/Blamxis/port-scanner-python",
      demo: "https://github.com/Blamxis/port-scanner-python/releases/download/v1.0/demo.mp4",
    },

    {
      title: "CyberTools Suite — Suite d’outils cybersécurité",
      description:
        "Une application web moderne regroupant 6 outils de cybersécurité passifs : CyberScan, générateur de hash, encodeur/décodeur Base64, vérification IP, générateur de mots de passe et encodeur/décodeur d’URL. Full client-side, interface premium et performances optimisées.",
      tech: "Tech : Next.js 15/16, TypeScript, TailwindCSS, crypto utils, App Router.",
      status: "Terminé",
      statusColor: "green",
      tags: [
        "Next.js",
        "TypeScript",
        "Cyber",
        "Web Tools",
        "Client-side",
        "Security",
      ],
      github: "https://github.com/Blamxis/cybertools",
      demo: "https://cybertools-v1.vercel.app/",
    },

    {
      title: "Dashboard Terminal — Interface web interactive cyber",
      description:
        "Un terminal web immersif simulant un mini‑OS cyber : système de fichiers virtuel, commandes personnalisées, animations avancées (typing, glitch, matrix, loading), scan cyber, et architecture modulaire. Projet portfolio premium démontrant maîtrise de Next.js, React et TypeScript.",
      tech: "Tech : Next.js 16, React, TypeScript, TailwindCSS, animations custom, App Router.",
      status: "Terminé",
      statusColor: "green",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Cyber",
        "Terminal",
        "Animations",
        "Frontend",
      ],
      github: "https://github.com/Blamxis/dashboard-terminal",
      demo: "https://dashboard-terminal-v1.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes Projets</h2>
        <p className="text-(--text-muted) max-w-2xl mx-auto">
          Une sélection de travaux illustrant mes compétences en développement,
          cybersécurité et ingénierie informatique. Les projets présentés ici
          évolueront au fil de mon apprentissage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              card-scan
              bg-black/70 border border-(--accent) rounded-lg p-6
              shadow-[0_0_15px_rgba(34,197,94,0.25)]
              backdrop-blur-sm
              transition-all hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]
            "
          >
            {/* Header style terminal */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <p className="ml-3 text-xs text-(--accent-soft)">
                terminal://project
              </p>
            </div>

            {/* Titre */}
            <h3 className="text-xl font-semibold mb-2 text-(--accent)">
              {project.title}
            </h3>

            {/* Statut */}
            <span
              className={`
                inline-block text-xs px-2 py-1 rounded border mb-4
                ${
                  project.statusColor === "green"
                    ? "bg-green-500/10 text-green-400 border-green-500/30"
                    : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                }
              `}
            >
              {project.status}
            </span>

            {/* Description */}
            <p className="text-(--text-muted) text-sm mb-2">
              {project.description}
            </p>

            {/* Mini description technique */}
            <p className="text-(--text-muted) text-xs italic mb-4">
              {project.tech}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-2 py-1 rounded bg-(--accent)/20 text-(--accent)
                    border border-(--accent)/40
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Boutons */}
            <div className="flex gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  className="
                    flex-1 text-center text-sm py-2 rounded border border-(--accent)
                    text-(--accent) hover:bg-(--accent) hover:text-black
                    transition-all
                  "
                >
                  GitHub
                </a>
              ) : (
                <div
                  className="
                    flex-1 text-center text-sm py-2 rounded border border-gray-600
                    text-gray-600 cursor-not-allowed
                  "
                >
                  Code privé
                </div>
              )}

              <a
                href={project.demo}
                target="_blank"
                className="
                  flex-1 text-center text-sm py-2 rounded border border-(--accent-soft)
                  text-(--accent-soft) hover:bg-(--accent-soft) hover:text-black
                  transition-all
                "
              >
                Démo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
