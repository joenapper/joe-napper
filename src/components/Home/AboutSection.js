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
              From design and development to testing and deployment, my skillset
              has been refined to work as efficiently and effectively as
              possible. During my career I have solved numerous problems using
              HTML, CSS, JavaScript, React.js, node.js and Python to name a few.
            </p>
          </article>
          <button>Read More</button>
        </div>
      </About>
    </div>
  );
};

const About = styled.div`
  background: #f4f4f4;
  height: 30vh;

  div {
    display: flex;
    align-items: center;
    width: 90vw;
    background: #fff;
    box-shadow: 1px 1px 5px 1px #ccc;
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

    button {
      padding: 1rem;
      position: absolute;
      right: 10vw;
      bottom: 0;
      transform: translateY(50%);
      background: var(--main-color);
      border: 1px solid #ccc;
      box-shadow: 1px 1px 5px 1px #919191; // Needs work
      /* box-shadow: 1px 1px 5px 1px #ccc; */ //Needs work
    }
  }
`;

export default AboutSection;
