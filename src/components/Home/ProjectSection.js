// Styled
import styled from "styled-components";
// Images
import Clockwork from "../../media/ClockworkMedia-min.png";
import OutdoorRevive from "../../media/OutdoorRevive-min.jpg";
import DemachiClothing from "../../media/DemachiClothing-min.jpg";
import SaskiaErhardt from "../../media/SaskiaErhardt-min.png";
import NapperNetwork from "../../media/NapperNetwork-min.png";
import GitHub from "../../media/GitHub-min.png";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [element, controls] = useScroll();
  return (
    <Projects variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>Portfolio</h2>
      <div className="cards">
        <Card
          href="https://joenapper.github.io/Clockwork/"
          target="_blank"
          className="card"
        >
          <img src={Clockwork} alt="Clockwork Media" />
        </Card>

        <Card
          href="https://demachiclothing.co.uk/"
          target="_blank"
          className="card"
        >
          <img src={DemachiClothing} alt="Demachi Clothing" />
        </Card>

        <Card
          href="https://www.saskiaerhardt.com"
          target="_blank"
          className="card"
        >
          <img src={SaskiaErhardt} alt="Saskia Erhardt" />
        </Card>

        <Card href="https://nappernetwork.com" target="_blank" className="card">
          <img src={NapperNetwork} alt="Napper Network" />
        </Card>

        <Card
          href="https://github.com/joenapper"
          target="_blank"
          className="card"
        >
          <img src={GitHub} alt="GitHub" />
        </Card>

        <Card
          href="https://outdoor-revive.co.uk/"
          target="_blank"
          className="card"
        >
          <img src={OutdoorRevive} alt="Outdoor Revive" />
        </Card>
      </div>
    </Projects>
  );
};

const Projects = styled(motion.div)`
  width: 50vw;
  margin: 4rem 25vw 4rem 25vw;
  text-align: center;

  h2 {
    font-size: 3rem;
    padding-bottom: 2.5rem;
    text-transform: uppercase;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: 1250px) {
    h2 {
      font-size: 2rem;
    }

    .cards {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 550px) {
    width: 70vw;
    margin: 4rem 15vw 4rem 15vw;
  }
`;

const Card = styled.a`
  border-radius: 0.1rem;
  width: 100%;
  box-shadow: var(--custom-shadow);
  max-height: 250px;
  transition: 0.15s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: revert;
    border-radius: 0.1rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px 1px #000;
  }

  @media (max-width: 1250px) {
    margin-bottom: 1rem;
    max-height: 100%;

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(6) {
      display: none;
    }
  }
`;

export default ProjectSection;
