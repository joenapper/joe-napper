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
    }
    h1 {
      font-size: 4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export default HeroSection;
