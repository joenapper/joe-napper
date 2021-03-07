// Styled
import styled from "styled-components";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const VolunteerSection = () => {
  const [element, controls] = useScroll();
  return (
    <Volunteer id="volunteer">
      <motion.article
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>Volunteer Work</h2>
        <p>
          I spent many years volunteering at my local training centre - passing
          down the knowledge and skills I learnt. This allowed me to develop my
          expertise and give back to the community. I hope to be able to soon
          share my passion for coding by teaching people who don’t have the
          opportunity or resources. Mental Minds is a charity that is very close
          to my heart - I took part in a sponsored 10 mile walk which raised
          over £2500. I hope to take part in many more charitable events and use
          my skills to help charities reach their goals.
        </p>
      </motion.article>
      <div></div>
    </Volunteer>
  );
};

const Volunteer = styled.section`
  position: relative;
  background-color: var(--secondary-color);
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

export default VolunteerSection;
