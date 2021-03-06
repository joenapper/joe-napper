// Styled
import styled from "styled-components";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const CodingSection = () => {
  const [element, controls] = useScroll();
  return (
    <Coding id="coding">
      <motion.article
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>Intro to Coding</h2>
        <p>
          I was first introduced to programming in secondary school and was
          instantly hooked. My passion for the subject led me to continue my
          studies in college where my interest and skills grew. I eventually
          landed a role in architectural engineering which involved the use of
          programs like CAD and AEC Collection to design high quality, high
          performance infrastructure designs. I really enjoyed the design aspect
          however, there wasn’t any coding involved so i decided to follow my
          passion and pursue a role as a developer.
        </p>
      </motion.article>
      <div></div>
    </Coding>
  );
};

const Coding = styled.section`
  background-color: var(--body-color);
  position: relative;
  padding: 6rem 0;

  &::before {
    position: absolute;
    content: "";
    width: 50%;
    height: 80px;
    top: 0;
    left: 0;
    background-color: var(--body-color);
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
    background-color: var(--body-color);
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
      width: 70vw;
      margin: 0 15vw;

      p {
        font-size: 1.2rem;
      }
    }

    div {
      width: 15%;
    }
  }

  @media (max-width: 768px) {
    article {
      width: 80vw;
      margin: 0 10vw;
    }
  }

  @media (max-width: 400px) {
    article {
      width: 90vw;
      margin: 0 5vw;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export default CodingSection;
