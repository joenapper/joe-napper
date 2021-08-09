// Components
import ContactSection from "../components/Home/ContactSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
// Styled
import styled from "styled-components";

const Contact = () => {
  return (
    <PrimaryContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ContactSection />
      <ScrollTop />
    </PrimaryContact>
  );
};

const PrimaryContact = styled(motion.main)`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    height: 70vh;
  }
`;

export default Contact;
