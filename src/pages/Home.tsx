import { Hero } from "@slices/Hero";
import { Projects } from "@slices/Projects";
import { About } from "@slices/About";
import { Clients } from "@slices/Clients";
import { Articles } from "@slices/Articles";
import { Contact } from "@slices/Contact";

export const Home = () => (
  <>
    <Hero />
    <Projects />
    <About />
    {/* Collage slice or testimonials slice */}
    <Clients />
    <Articles />
    <Contact />
  </>
);
