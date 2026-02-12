"use client";

import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative mt-32 mb-24 p-6 md:p-10 rounded-xl bg-black/60 border border-(--accent)/40 overflow-hidden animate-fadeInUp">

      {/* Décorations */}
      <div className="absolute inset-0 pointer-events-none border-animation"></div>
      <div className="absolute inset-0 opacity-[0.07] bg-circuit-organic"></div>

      {/* Header terminal */}
      <div className="flex items-center gap-2 mb-10 relative z-10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="ml-3 text-xs text-(--accent-soft)">terminal://contact</p>
      </div>

      {/* Titre */}
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
        Me contacter
      </h3>

      {/* Texte d’intro */}
      <p className="text-(--text-muted) text-lg leading-relaxed mb-12 max-w-3xl text-justify relative z-10">
        Envie d’échanger, de discuter d’un projet ou simplement de prendre contact ?
        Voici mes coordonnées directes. Je réponds rapidement et avec plaisir.
      </p>

      {/* Cartes de contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {/* Email */}
        <a
          href="mailto:maxime.gavinet@gmail.com"
          className="group flex items-center gap-4 p-6 rounded-xl bg-black/40 border border-white/10 hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300 shadow-[0_0_0px_rgba(34,197,94,0.0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <Mail className="w-8 h-8 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
          <div>
            <p className="text-white font-semibold text-lg">Email</p>
            <p className="text-(--text-muted) text-sm">maxgvt26@icloud.com</p>
          </div>
        </a>

        {/* Téléphone */}
        <a
          href="tel:+33600000000"
          className="group flex items-center gap-4 p-6 rounded-xl bg-black/40 border border-white/10 hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300 shadow-[0_0_0px_rgba(34,197,94,0.0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <Phone className="w-8 h-8 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
          <div>
            <p className="text-white font-semibold text-lg">Téléphone</p>
            <p className="text-(--text-muted) text-sm">06 16 68 32 09</p>
          </div>
        </a>

      </div>
    </div>
  );
}
