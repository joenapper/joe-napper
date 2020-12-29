// Styled
import styled from "styled-components";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const HobbieSection = () => {
  const [element, controls] = useScroll();
  return (
    <Hobbie id="hobbies">
      <motion.article
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>Hobbies</h2>
        <p>
          In my spare time i like to keep active - whether that be a trip to the
          gym or a morning jog. I also enjoy progressing my skills by designing
          concepts for new applications and building sites from scratch.
          Investments and trading have always been a hobby of mine so I utilised
          my skills and developed a completely automated forex trading algorithm
          which has proven to be profitable and has the potential to help others
          with passive income.
        </p>
      </motion.article>
      <div></div>
    </Hobbie>
  );
};

const Hobbie = styled.section`
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

export default HobbieSection;
