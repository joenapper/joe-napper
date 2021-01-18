// Components
import ContactSection from "../components/Home/ContactSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
// Helmet
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <motion.main
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
    </motion.main>
  );
};

export default Contact;
