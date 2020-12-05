import styled from "styled-components";
import CSS from "../../media/css.png";

const IntroSection = () => {
  return (
    <Intro>
      <article>
        <p className="intro">
          Im Joe - an experienced web developer based in South Yorkshire.
          Currently working alongside the technical director at CMIS-UK to
          develop the next version of the highly anticipated Rubi CRM system and
          manage over a dozen client portals with Rubi integration.
        </p>
        {/* <div>
          <img src={CSS} alt="Me" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            consequuntur quis.
          </p>
        </div> */}
      </article>
    </Intro>
  );
};

const Intro = styled.div`
  background: var(--main-color);
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  article {
    width: 60vw;
    margin: 0 20vw;
    display: flex;

    .intro {
      width: 60%;
      font-size: 1.5rem;
      line-height: 1.5;
      letter-spacing: 2px;
      /* flex-grow: 1; */
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40%;
      margin-left: 1rem;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: green;
      }
    }
  }
`;

export default IntroSection;
