// Components
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ExpertiseSection from "../components/ExpertiseSection";
import ArticleSection from "../components/ArticleSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExpertiseSection />
      <ArticleSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Home;
