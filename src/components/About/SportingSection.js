// Styled
import styled from "styled-components";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const SportingSection = () => {
  const [element, controls] = useScroll();
  return (
    <Sport id="sports">
      <motion.article
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>Sports Coaching</h2>
        <p>
          From a very early age I trained in a number of martial arts -
          Taekwondo being my favourite. I spent a lot of time training and
          perfecting my skills which taught me the importance of practice and
          hard work. My dedication paid off as I was soon placed on the
          competitive team and after a successful career I decided to transition
          into coaching. I enjoyed sharing my knowledge with others and helping
          them improve their skills which in turn improved my teamwork and
          leadership skills.
        </p>
      </motion.article>
      <div></div>
    </Sport>
  );
};

const Sport = styled.section`
  background-color: var(--secondary-color);
  padding: 6rem 0;

  article {
    width: 40vw;
    margin: 0 30vw;
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

export default SportingSection;
