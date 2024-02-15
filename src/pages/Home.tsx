import { Hero } from "@slices/Hero";
import { RecentProjects } from "@slices/RecentProjects";
import { About } from "@slices/About";
import { Clients } from "@slices/Clients";
import { Articles } from "@slices/Articles";

export const Home = () => (
  <>
    <Hero />
    <RecentProjects />
    <About />
    {/* Collage slice */}
    <Clients />
    <Articles />
    {/* Contact slice */}
  </>
);
