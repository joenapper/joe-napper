// Router
import { Link } from "react-router-dom";
// Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <div>
      <About>
        <div>
          <article>
            <h2>About Me</h2>
            <p>
              From design and development to testing and deployment, I have
              built many high end applications from scratch and updated existing
              apps to keep up with modern design trends. During my career I have
              solved numerous problems using HTML, CSS and JavaScript (to name a
              few) along with the relevant frameworks and supporting
              technologies.
            </p>
          </article>
          <Link to="/about">Read More</Link>
        </div>
      </About>
    </div>
  );
};

const About = styled.div`
  background: var(--body-color);
  height: 30vh;

  div {
    display: flex;
    align-items: center;
    width: 90vw;
    background: var(--secondary-color);
    box-shadow: var(--custom-shadow);
    transform: translateY(-50%);
    position: relative;

    article {
      padding: 4rem 10vw 4rem 20vw;

      h2 {
        font-size: 2rem;
        padding-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.5;
      }
    }

    a {
      font-weight: bold;
      padding: 1rem;
      position: absolute;
      right: 10vw;
      bottom: 0;
      transform: translateY(50%);
      background: var(--main-color);
      border: 1px solid #ccc;
      box-shadow: var(--custom-shadow);
      transition: 0.15s ease-in-out;

      &:hover {
        box-shadow: 1px 1px 5px 1px #000;
      }
    }
  }

  @media (max-width: 1025px) {
    div {
      article {
        padding: 4rem 10vw;

        p {
          font-size: 1.4rem;
        }
      }

      a {
        padding: 1.2rem 1rem;
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 550px) {
    div {
      width: 95vw;

      article {
        padding: 2rem 5vw;

        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }

      a {
        padding: 0.8rem 0.8rem;
        font-size: 1rem;
      }
    }
  }
`;

export default AboutSection;
