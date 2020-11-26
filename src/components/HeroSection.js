// Styled
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Hero>
      <div>
        <span>- Full-Stack Developer -</span>
        <h1>&#60; JoeNapper /&#62;</h1>
        <h3>
          Building high end applications from the ground up using modern
          technologies.
        </h3>
      </div>
    </Hero>
  );
};

const Hero = styled.article`
  background: #fdda3e;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    span {
      font-size: 1rem; // NN
      font-family: "Saira", sans-serif;
      letter-spacing: 3px;
      display: block;
      transform: translateY(0.9rem);
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
