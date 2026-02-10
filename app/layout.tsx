import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";


export const metadata: Metadata = {
  title: "Maxime Gavinet — Portfolio",
  description: "Portfolio de Maxime Gavinet, développeur web et futur ingénieur.",
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
