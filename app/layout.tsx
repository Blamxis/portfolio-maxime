import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Maxime Gavinet — Portfolio",
  description:
    "Portfolio de Maxime Gavinet, développeur web en reconversion vers l'ingénierie cybersécurité. Découvrez mes projets, compétences, parcours et CV.",
  keywords: [
    "Maxime Gavinet",
    "Portfolio",
    "Développeur Web",
    "Cybersécurité",
    "BUT Informatique",
    "ESISAR",
    "React",
    "Next.js",
    "Développement Web",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Maxime Gavinet" }],
  creator: "Maxime Gavinet",
  metadataBase: new URL("https://portfolio-maxime.vercel.app"),
  openGraph: {
    title: "Portfolio — Maxime Gavinet",
    description:
      "Découvrez le portfolio de Maxime Gavinet : projets, compétences, parcours et objectifs en cybersécurité.",
    url: "https://portfolio-maxime.vercel.app",
    siteName: "Portfolio Maxime Gavinet",
    images: [
      {
        url: "/images/metaog-v2.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Maxime Gavinet",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Maxime Gavinet",
    description:
      "Portfolio de Maxime Gavinet, développeur web et futur ingénieur cybersécurité.",
    images: ["/images/metaog-v2.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-(--bg-main) text-(--text-main)">
        <Header />

        <main className="flex-1">
          <div className="container py-8">{children}</div>
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
