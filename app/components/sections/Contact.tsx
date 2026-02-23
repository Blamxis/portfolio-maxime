"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-32 mb-24 p-6 md:p-10 rounded-xl bg-black/60 border border-(--accent)/40 overflow-hidden animate-fadeInUp"
    >
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
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
        Me contacter
      </h3>

      {/* Sous-titre */}
      <p className="text-(--accent-soft) text-lg mb-8 relative z-10">
        Disponible, réactif et toujours ouvert à la discussion.
      </p>

      {/* Texte d’intro — responsive optimisé */}
      <p
        className="
          text-(--text-muted)
          text-base md:text-lg
          leading-relaxed
          mb-12
          w-full
          max-w-full
          md:max-w-3xl
          lg:max-w-4xl
          xl:max-w-5xl
          text-justify
          relative
          z-10
        "
      >
        Que ce soit pour un échange, une opportunité, une collaboration ou simplement une prise de
        contact, je suis facilement joignable via les moyens ci‑dessous. Je réponds rapidement et
        avec plaisir.
      </p>

      {/* Cartes de contact — responsive + hauteurs harmonisées */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-stretch">

        {/* Email */}
        <a
          href="mailto:maxgvt26@icloud.com"
          className="group h-full flex items-start gap-4 p-6 rounded-xl bg-black/40 border border-white/10 
                     hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300 
                     shadow-[0_0_0px_rgba(34,197,94,0.0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <Mail className="w-8 h-8 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
          <div>
            <p className="text-white font-semibold text-lg">Email</p>
            <p className="text-(--text-muted) text-sm">maxgvt26@icloud.com</p>
            <p className="text-(--accent-soft) text-xs mt-1">Réponse rapide garantie</p>
          </div>
        </a>

        {/* Téléphone */}
        <a
          href="tel:+33616683209"
          className="group h-full flex items-start gap-4 p-6 rounded-xl bg-black/40 border border-white/10 
                     hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300 
                     shadow-[0_0_0px_rgba(34,197,94,0.0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <Phone className="w-8 h-8 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
          <div>
            <p className="text-white font-semibold text-lg">Téléphone</p>
            <p className="text-(--text-muted) text-sm">06 16 68 32 09</p>
            <p className="text-(--accent-soft) text-xs mt-1">Disponible en journée</p>
          </div>
        </a>

        {/* Localisation */}
        <div
          className="group h-full flex items-start gap-4 p-6 rounded-xl bg-black/40 border border-white/10 
                     hover:border-(--accent)/40 hover:bg-black/60 transition-all duration-300 
                     shadow-[0_0_0px_rgba(34,197,94,0.0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <MapPin className="w-8 h-8 text-(--accent) group-hover:scale-110 transition-transform duration-300" />
          <div>
            <p className="text-white font-semibold text-lg">Localisation</p>
            <p className="text-(--text-muted) text-sm">Rochefort‑en‑Valdaine, Drôme (26)</p>
            <p className="text-(--accent-soft) text-xs mt-1">Ouvert aux déplacements</p>
          </div>
        </div>

      </div>

      {/* CTA final */}
      <div className="mt-12 flex justify-center relative z-10">
        <a
          href="mailto:maxgvt26@icloud.com"
          className="flex items-center gap-3 px-8 py-3 rounded-lg bg-(--accent) text-black font-semibold 
                     shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] 
                     transition-all"
        >
          <Send className="w-5 h-5" />
          Envoyer un message
        </a>
      </div>
    </section>
  );
}
