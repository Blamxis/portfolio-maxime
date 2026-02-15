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
      title: "Scanner de ports — Outil de cybersécurité",
      description:
        "Un scanner de ports simple en Python permettant d’analyser les ports ouverts d’une machine cible.",
      tech: "Tech : Python, sockets, threading.",
      status: "À venir",
      statusColor: "gray",
      tags: ["Python", "Réseau", "Cyber", "CLI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Terminal — Interface web interactive",
      description:
        "Un tableau de bord web en style terminal simulant des commandes système (whoami, ping, ls...).",
      tech: "Tech : React, TailwindCSS, animations CSS.",
      status: "À venir",
      statusColor: "gray",
      tags: ["React", "Tailwind", "Frontend", "UI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cyber Tools — Mini‑suite d’outils web",
      description:
        "Application web regroupant plusieurs outils utiles : générateur de hash, encodeur Base64, vérification IP, générateur de mots de passe.",
      tech: "Tech : Next.js, API Routes, crypto utils.",
      status: "À venir",
      statusColor: "gray",
      tags: ["Next.js", "API", "Cyber", "Web Tools"],
      github: "#",
      demo: "#",
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
