import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import BackgroundGlow from "@/components/ui/background-glow";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
import SocialDock from "@/components/ui/social-dock";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Stats from "@/components/sections/stats";
import Projects from "@/components/sections/projects";
import CV from "@/components/sections/cv";
import Testimonials from "@/components/sections/testimonials";
import Certificates from "@/components/sections/certificates";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BackgroundGlow />
      <CustomCursor />

      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <About />

        <Experience />

        <Services />

        <Skills />

        <Stats />

        <Projects />

        <CV />

        <Testimonials />

        <Certificates />

        <Contact />
      </main>

      <Footer />

      <SocialDock />
    </>
  );
}