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
  div {
    display: flex;
    align-items: center;
    width: 90%;
    /* height: 300px; */
    background: #fff;
    box-shadow: 1px 1px 5px 1px #ccc;
    transform: translateY(-50%);
    position: relative;
    article {
      /* padding-left: 20%;
      width: 90%; */
      padding: 4rem 10% 4rem 20%;
      h2 {
        font-size: 2rem;
        padding-bottom: 1rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    button {
      padding: 1rem;
      position: absolute;
      right: 10%;
      bottom: 0;
      transform: translateY(50%);
      background: #fdda3e;
      border: 1px solid #ccc;
      /* box-shadow: 1px 1px 5px 1px #ccc; */
    }
  }
`;

export default AboutSection;
