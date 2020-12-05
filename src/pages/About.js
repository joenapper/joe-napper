// Components
import IntroSection from "../components/About/IntroSection";
import SportingSection from "../components/About/SportingSection";
import CodingSection from "../components/About/CodingSection";
import ExperienceSection from "../components/About/ExperienceSection";
import HobbieSection from "../components/About/HobbieSection";
import VolunteerSection from "../components/About/VolunteerSection";
import ContactSection from "../components/Home/ContactSection";

const About = () => {
  return (
    <main>
      <IntroSection />
      <SportingSection />
      <CodingSection />
      <ExperienceSection />
      <HobbieSection />
      <VolunteerSection />
      <ContactSection />
    </main>
  );
};

export default About;
