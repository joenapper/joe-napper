// Components
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ProjectSection from "../components/Home/ProjectSection";
import ExpertiseSection from "../components/Home/ExpertiseSection";
import ArticleSection from "../components/Home/ArticleSection";
import ContactSection from "../components/Home/ContactSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExpertiseSection />
      <ArticleSection />
      <ContactSection />
      <ScrollTop />
    </motion.main>
  );
};

export default Home;
