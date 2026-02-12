import AboutIdentity from "./about/AboutIdentity";
import AboutTimeline from "./about/AboutTimeLine";
import AboutCV from "./about/AboutCV";
import AboutSkills from "./about/AboutSkills";
import AboutGoals from "./about/AboutGoals";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          À propos
        </h2>
        <p className="text-(--text-muted) mt-4 max-w-2xl mx-auto text-lg">
          Une présentation claire de mon parcours, de mon identité et de mes objectifs.
        </p>
      </div>

      <AboutIdentity />
      <AboutTimeline />
      <AboutCV />
      <AboutSkills />
      <AboutGoals />
    </section>
  );
}
