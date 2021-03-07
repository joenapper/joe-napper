// Styled
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Hero>
      <div>
        <span className="role">- Frontend Developer -</span>
        <h1>&#60; JoeNapper /&#62;</h1>
        <span>
          Building high end applications from the ground up using modern
          technologies.
        </span>
      </div>
    </Hero>
  );
};

const Hero = styled.article`
  background: var(--main-color);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;
    width: 60vw;

    .role {
      letter-spacing: 3px;
      display: block;
      transform: translateY(0.9rem);
      font-size: 1rem;
    }

    span {
      font-size: 1.3rem;
      font-family: "Saira", sans-serif;
    }

    h1 {
      font-size: 4rem;
      font-family: "Saira", sans-serif;
      color: var(--joenapper);
    }
  }

  @media (max-width: 1025px) {
    height: 70vh;
  }

  @media (max-width: 550px) {
    height: 80vh;

    div {
      width: 90vw;
      margin-top: -10rem;

      span {
        font-size: 1rem;
      }

      h1 {
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: 466px) {
    height: 60vh;

    div {
      margin-top: -7rem;

      h1 {
        font-size: 2.1rem;
      }
    }
  }

  @media (max-width: 380px) {
    div {
      .role {
        font-size: 0.8rem;
      }

      span {
        font-size: 0.9rem;
      }

      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export default HeroSection;
