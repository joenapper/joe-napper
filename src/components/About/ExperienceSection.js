// Styled
import styled from "styled-components";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const CodingSection = () => {
  const [element, controls] = useScroll();
  return (
    <Coding id="experience">
      <motion.article
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>Commercial Experience</h2>
        <p>
          I took the leap and secured a job as a Junior Developer within a small
          team at Hungry Cobra which allowed me to gain experience in the
          industry. At the same time I sought to gain more qualifications which
          led me to discover Code Institute where I completed a level 5 diploma
          in software development. My hard work paid off as I obtained a role
          working directly with the technical director at CMIS-UK.
        </p>
      </motion.article>
      <div></div>
    </Coding>
  );
};

const Coding = styled.section`
  background-color: var(--secondary-color);
  position: relative;
  padding: 6rem 0;

  &::before {
    position: absolute;
    content: "";
    width: 50%;
    height: 80px;
    top: 0;
    left: 0;
    background-color: var(--secondary-color);
    transform: translateY(-50%) skewY(4deg);
    border-top: 1px solid rgba(204, 204, 204, 0.5);
  }

  &::after {
    position: absolute;
    content: "";
    width: 50%;
    height: 80px;
    top: 0;
    right: 0;
    background-color: var(--secondary-color);
    transform: translateY(-50%) skewY(-4deg);
    border-top: 1px solid rgba(204, 204, 204, 0.5);
  }

  article {
    width: 40vw;
    margin: 0rem 30vw;
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      letter-spacing: 2px;
      text-align: justify;
    }
  }

  div {
    height: 2px;
    background-color: var(--main-color);
    width: 10%;
    margin: 1rem auto;
    border-radius: 50%;
  }

  @media (max-width: 1025px) {
    article {
      width: 60vw;
      margin: 0 20vw;

      p {
        font-size: 1.2rem;
      }
    }

    div {
      width: 15%;
    }
  }
`;

export default CodingSection;
