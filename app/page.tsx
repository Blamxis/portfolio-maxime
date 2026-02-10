/*
  🧪 Page d'accueil temporaire
  - Juste pour valider le layout, le header et le footer
*/
export default function Home() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col items-center justify-center text-center"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-(--accent-soft) mb-3">
        Portfolio en construction
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Construisons quelque chose de solide.
      </h1>
      <p className="text-sm md:text-base text-(--text-muted) max-w-xl">
        Ce layout est la base de ton futur portfolio : propre, modulaire, tech,
        prêt à accueillir tes sections (hero, projets, à propos, contact).
      </p>
    </section>
  );
}
