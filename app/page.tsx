export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 to-black text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Maxime Gavinet
        </h1>

        <p className="text-lg text-neutral-300 mb-8">
          Développeur Web & Futur Ingénieur — passionné par le design moderne,
          les interfaces propres et l’apprentissage continu.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-neutral-700 hover:border-neutral-500 transition"
          >
            Me contacter
          </a>
        </div>
      </div>
    </main>
  );
}
