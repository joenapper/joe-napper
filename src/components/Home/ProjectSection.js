// Styled
import styled from "styled-components";
// Images
import Clockwork from "../../media/ClockworkMedia.png";
import mechanized from "../../media/mechanized.png";
import NapperNetwork from "../../media/NapperNetwork.png";
// import CMIS from "../../media/CMIS-UK.png";
import RubiCRM from "../../media/RubiCRM.png";
import HungryCobra from "../../media/HungryCobra.png";
import CodeInstitute from "../../media/CodeInstitute.png";

const ProjectSection = () => {
  return (
    <Projects>
      <h2>Portfolio</h2>
      {/*  Projects // Clients // Portfolio */}
      <div className="cards">
        <div className="card">
          <img src={Clockwork} alt="Clockwork Media" />
        </div>
        <div className="card">
          <img src={RubiCRM} alt="Rubi CRM" />
        </div>
        <div className="card">
          <img src={HungryCobra} alt="Hungry Cobra" />
        </div>
        <div className="card">
          <img src={NapperNetwork} alt="Napper Network" />
        </div>
        <div className="card">
          <img src={mechanized} alt="mechanized" />
        </div>
        <div className="card">
          <img src={CodeInstitute} alt="Code Institute" />
        </div>
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

    .card {
      background-color: yellow;
      border-radius: 0.1rem;
      width: 100%;
      box-shadow: 1px 1px 5px 1px #ccc;

      img {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        border-radius: 0.1rem;
      }
    }
  }
`;

export default ProjectSection;
