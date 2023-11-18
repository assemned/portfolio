import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="about">
        <About />
        <Skills />
      </div>
      <Portfolio />
      <Contact />
    </>
  );
}
