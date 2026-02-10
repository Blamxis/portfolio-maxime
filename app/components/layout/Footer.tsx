export default function Footer() {
  return (
    <footer className="relative border-t border-(--border-subtle) bg-black/40 backdrop-blur-xl mt-10">
      
      {/* Ligne lumineuse animée */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-60 animate-pulse" />

      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 text-xs text-(--text-muted)">
        
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Maxime Gavinet — Tous droits réservés.
        </p>

        {/* Stack */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.18em] text-(--accent-soft)">
            Next.js
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-(--accent-soft)">
            React
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-(--accent-soft)">
            TailwindCSS
          </span>
        </div>

        {/* Icônes sociales */}
        <div className="flex items-center justify-center gap-4">
          
          {/* GitHub */}
          <a
            href="https://github.com/Blamxis"
            target="_blank"
            className="text-(--text-muted) hover:text-(--accent) transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8.8-.8-.8-.1-1.6-.4-2.2-.9-1.4-1.2-1.4-3.3-.1-4.5.4-.4.9-.7 1.4-.9-.2-.5-.4-1.2-.4-1.9 0-1.4.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.2 0 .7-.1 1.4-.4 1.9.5.2 1 .5 1.4.9 1.3 1.2 1.3 3.3-.1 4.5-.6.5-1.4.8-2.2.9 0 0-.2.9.8.8 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.7 2.1-3.9 1.4v2c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/blamxis/"
            target="_blank"
            className="text-(--text-muted) hover:text-(--accent) transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-8.2c0-2-.1-4.5-2.8-4.5-2.8 0-3.2 2.2-3.2 4.3V24h-4V8z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
