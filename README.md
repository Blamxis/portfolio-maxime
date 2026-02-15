# Portfolio — Maxime Gavinet

Portfolio personnel développé avec Next.js et TailwindCSS.  
Il présente mon parcours, mes compétences, mes projets et mes objectifs dans le domaine de l’informatique.

🔗 **Démo en ligne :** https://maxime-gavinet.vercel.app  
📄 **CV :** Disponible dans la section dédiée du site  
📬 **Contact :** maxgvt26@icloud.com

---

## 🎯 Objectif du projet

Ce portfolio a été conçu pour :
- présenter mon parcours de reconversion vers l’informatique,
- mettre en avant mes compétences techniques,
- valoriser mes projets personnels et professionnels,
- servir de support à mes candidatures (BUT Informatique, stages, alternance).

---

## 🛠️ Stack technique

- **Framework :** Next.js 16 (App Router)
- **Frontend :** React 19
- **Style :** TailwindCSS 4
- **Icônes :** Heroicons, Lucide React
- **Déploiement :** Vercel
- **SEO :** Metadata Next.js (OpenGraph, Twitter Card, favicon, metadataBase)

---

## 📂 Structure du projet

app/
|--components/  # Composants UI & Layout
|    |-- layout/ # Footer & Header
|    |-- sections/ # Sections du site
|    |-- ui/ # Composant UI
|--globals.css # Styles globaux
|--layout.tsx # Layout Principal
|--page.tsx # Page principale

public/
|--images/ # Images
|--CV.pdf # CV Téléchargeable
|--favicon.svg # Icon SVG

---

## 🚀 Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Animations légères en CSS/Tailwind
- Section projets avec pages dédiées
- Section compétences claire et structurée
- Téléchargement du CV
- SEO complet (title, description, OG, Twitter Card)
- Code organisé et composants réutilisables

---

## 📦 Installation & développement

```bash
git clone https://github.com/ton-user/portfolio-maxime
cd portfolio-maxime
npm install
npm run dev