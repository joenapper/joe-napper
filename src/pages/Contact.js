// Components
import ContactSection from "../components/Home/ContactSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
// Helmet
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Joe Napper - Contact</title>
        <meta
          name="description"
          content="Web developer currently working on the next generation of CRM systems for CMIS-UK."
        />
      </Helmet>
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
