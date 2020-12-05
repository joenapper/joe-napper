// Components
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ProjectSection from "../components/Home/ProjectSection";
import ExpertiseSection from "../components/Home/ExpertiseSection";
import ArticleSection from "../components/Home/ArticleSection";
import ContactSection from "../components/Home/ContactSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExpertiseSection />
      <ArticleSection />
      <ContactSection />
    </main>
  );
};

export default Home;
