"use client";

import { useState, useEffect } from "react";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Accueil", id: "hero" },
    { label: "À propos", id: "about" },
    { label: "Projets", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`
        sticky top-0 z-40 backdrop-blur-xl transition-all duration-300
        border-b border-(--border-subtle)
        bg-black/40
        ${scrolled ? "shadow-[0_0_25px_rgba(34,197,94,0.25)]" : ""}
      `}
    >
      {/* Réseau de points animé */}
      <div className="header-dots" />

      {/* Ligne lumineuse */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-60" />

      <div className="container relative flex items-center justify-between py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="
            relative h-10 w-10 bg-black/70 rounded-md border border-(--accent)
            shadow-[0_0_15px_rgba(34,197,94,0.35)]
            flex items-center justify-center
          ">
            {/* Pins */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-1 bg-(--accent) rounded-sm" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 bg-(--accent) rounded-sm" />
            <span className="absolute top-1/2 -translate-y-1/2 -left-1 h-1 w-1 bg-(--accent) rounded-sm" />
            <span className="absolute top-1/2 -translate-y-1/2 -right-1 h-1 w-1 bg-(--accent) rounded-sm" />

            {/* Glow interne */}
            <div className="absolute inset-0 bg-(--accent)/10 blur-sm animate-pulse" />

            {/* Initiales */}
            <span className="relative z-10 font-bold text-(--accent) tracking-wide">
              MG
            </span>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Maxime Gavinet</span>
            <span className="text-[11px] text-(--text-muted)">
              Dev Web — Étudiant en Informatique
            </span>
          </div>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                relative text-(--text-muted) transition-colors
                hover:text-(--accent)
              "
            >
              {item.label}
              <span className="
                absolute left-0 -bottom-1 h-px w-0 bg-(--accent)
                transition-all duration-300
                group-hover:w-full
              " />
            </a>
          ))}
        </nav>

        {/* CTA + menu mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="
              hidden md:inline-flex items-center rounded-md border border-(--accent)
              px-3 py-1.5 text-xs font-medium text-(--accent)
              hover:bg-(--accent) hover:text-black transition-all
              shadow-[0_0_10px_rgba(34,197,94,0.25)]
            "
          >
            Disponible pour alternance
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden h-10 w-10 rounded-md border border-(--border-subtle)
              flex items-center justify-center bg-black/50
              hover:border-(--accent) transition-all
            "
          >
            <div className="relative w-6 h-6">
              <span
                className={`
                  absolute left-0 top-1/2 w-full h-0.5 bg-(--text-main)
                  transition-all duration-300
                  ${open ? "rotate-45 translate-y-0" : "-translate-y-2"}
                `}
              />
              <span
                className={`
                  absolute left-0 top-1/2 w-full h-0.5 bg-(--text-main)
                  transition-all duration-300
                  ${open ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  absolute left-0 top-1/2 w-full h-0.5 bg-(--text-main)
                  transition-all duration-300
                  ${open ? "-rotate-45 translate-y-0" : "translate-y-2"}
                `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="container flex flex-col py-3 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="
                py-2 text-(--text-main) hover:text-(--accent)
                transition-colors
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
