// Styled
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Hero>
      <div>
        <span className="role">- Full-Stack Developer -</span>
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
      font-size: 1.3rem; // NN
      font-family: "Saira", sans-serif;
    }

    h1 {
      font-size: 4rem;
      font-family: "Saira", sans-serif;
      color: #1f1f1f;
    }

    h3 {
      font-size: 1.2rem;
      font-family: "Saira", sans-serif;
    }
  }
`;

export default HeroSection;
