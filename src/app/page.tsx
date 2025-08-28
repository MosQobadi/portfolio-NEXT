import { About } from "./_components/About";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Projects } from "./_components/Projects";
import { Contact } from "./_components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
