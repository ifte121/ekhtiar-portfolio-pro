import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Services />

      <Skills />

      <Projects />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}