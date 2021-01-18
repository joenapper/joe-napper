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
// Helmet
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Helmet>
        <title>Joe Napper - About</title>
        <meta
          name="description"
          content="Web developer currently working on the next generation of CRM systems for CMIS-UK."
        />
      </Helmet>
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
