"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Revenir en haut"
      className={`
        fixed bottom-6 right-6 z-50
        h-10 w-10 rounded-md
        flex items-center justify-center
        bg-black/60 border border-(--accent)
        text-(--accent)
        shadow-[0_0_12px_rgba(34,197,94,0.35)]
        backdrop-blur-md
        transition-all duration-300
        hover:bg-(--accent) hover:text-black
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      {/* Flèche minimaliste */}
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4l-8 8h5v8h6v-8h5z" />
      </svg>
    </button>
  );
}
