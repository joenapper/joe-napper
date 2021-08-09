// Components
import IntroSection from "../components/About/IntroSection";
import SportingSection from "../components/About/SportingSection";
import CodingSection from "../components/About/CodingSection";
import ExperienceSection from "../components/About/ExperienceSection";
import HobbieSection from "../components/About/HobbieSection";
import VolunteerSection from "../components/About/VolunteerSection";
import ContactSection from "../components/Home/ContactSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const About = () => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroSection />
      <SportingSection />
      <CodingSection />
      <ExperienceSection />
      <HobbieSection />
      <VolunteerSection />
      <ContactSection />
      <ScrollTop />
    </motion.main>
  );
};

export default About;
