import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      {/* Tu ajouteras les autres sections ici */}
       <Projects />
      {/* <About /> */}
      {/* <Contact /> */}
    </main>
  );
}
