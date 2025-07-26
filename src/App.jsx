import Volunteering from "./components/Volunteering";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selction:text-cyan-900 min-h-screen">
      <div className="absolute top-0 -z-10 h-full w-full"></div>
      {/* adding the background of the website */}
      <div className="fixed top-0 z-[-2] min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <section id="hero">
          <Hero />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="certificates">
          <Certificates/>
        </section>
        <section id="volunteering">
          <Volunteering/>
        </section>
        <Footer/>
      </div>
    <Analytics />
  </div>
  );
};

export default App;