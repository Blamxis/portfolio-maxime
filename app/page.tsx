import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
}
