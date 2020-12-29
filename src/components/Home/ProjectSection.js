// Styled
import styled from "styled-components";
// Images
import Clockwork from "../../media/ClockworkMedia.png";
import Rubi from "../../media/Rubi.png";
import HungryCobra from "../../media/HungryCobra.png";
import NapperNetwork from "../../media/NapperNetwork.png";
import GitHub from "../../media/GitHub.png";
import CodeInstitute from "../../media/CodeInstitute.png";

const ProjectSection = () => {
  return (
    <Projects>
      <h2>Portfolio</h2>
      <div className="cards">
        <Card
          href="https://joenapper.github.io/Clockwork/"
          target="_blank"
          className="card"
        >
          <img src={Clockwork} alt="Clockwork Media" />
        </Card>
        <Card href="https://www.rubicrm.net/" target="_blank" className="card">
          <img src={Rubi} alt="Rubi CRM" />
        </Card>
        <Card
          href="https://www.eukhost.com/?gclid=CjwKCAiAxKv_BRBdEiwAyd40N72rR3Rw6cVe7-Rfcuz68jM75tumcnPch9cGa9DaITOTiu79T9dCpxoCKzoQAvD_BwE"
          target="_blank"
          className="card"
        >
          <img src={HungryCobra} alt="Hungry Cobra" />
        </Card>
        <Card
          href="https://joenapper.github.io/under-maintenance/"
          target="_blank"
          className="card"
        >
          <img src={NapperNetwork} alt="Napper Network" />
        </Card>
        <Card
          href="https://github.com/joenapper"
          target="_blank"
          className="card"
        >
          <img src={GitHub} alt="mechanized" />
        </Card>
        <Card
          href="https://codeinstitute.net/"
          target="_blank"
          className="card"
        >
          <img src={CodeInstitute} alt="Code Institute" />
        </Card>
      </div>
    </Projects>
  );
};

const Projects = styled.div`
  width: 50vw;
  margin: 0 25vw;
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

  @media (max-width: 1025px) {
    width: 70vw;
    margin: 0 15vw;

    .cards {
      grid-gap: 1.2rem 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 70vw;
    margin: 0 15vw;
  }

  @media (max-width: 550px) {
    .cards {
      display: flex;
      flex-direction: column;
      grid-gap: 1rem;
    }
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
    /* max-height: 250px; */
    height: 100%;
    object-fit: revert;
    border-radius: 0.1rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px 1px #000;
  }

  @media (max-width: 550px) {
    &:nth-child(6),
    &:nth-child(5),
    &:nth-child(4) {
      display: none;
    }
  }
`;

export default ProjectSection;
