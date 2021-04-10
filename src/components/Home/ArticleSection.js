// Styled
import styled from "styled-components";
// Animations
import { fade } from "../../animation";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const ArticleSection = () => {
  const [element, controls] = useScroll();
  return (
    <Article>
      <div className="container">
        <h2>Articles</h2>
        <p>
          I like to write short articles on tips and tricks I've learned over
          the years.....
        </p>
        <motion.div
          className="cards"
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <a
            href="https://joenapper.medium.com/optimise-your-css-with-shorthand-properties-927e08b6afae"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <h4>Optimise Your CSS With Shorthand Properties!</h4>
            <p>
              We use shorthand properties to set the values of multiple CSS
              properties simultaneously, resulting in more optimised and
              efficient code...
            </p>
            <p>Read More</p>
          </a>
          <a
            href="https://joenapper.medium.com/why-you-should-be-using-css-variables-3989c92e200f"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <h4>Why you should be using CSS Variables!</h4>
            <p>
              The use of CSS Variables allows us as developers to instantly
              update a property value throughout our entire application...
            </p>
            <p>Read More</p>
          </a>
          <a
            href="https://joenapper.medium.com/"
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <h4>See All</h4>
            <p>
              Check out my full list of articles over on Medium. I talk about
              design principles and share my knowledge with fellow devs.
            </p>
            <p>See All</p>
          </a>
        </motion.div>
      </div>
      <div className="bg-split"></div>
    </Article>
  );
};

const Article = styled.div`
  background: var(--main-color);
  padding-top: 4rem;
  position: relative;

  .bg-split {
    position: absolute;
    height: 15%;
    width: 100%;
    bottom: 0;
    background-color: var(--body-color);
  }

  .container {
    height: 100%;
    width: 60vw;
    margin: 0 20vw;
    text-align: center;
    position: relative;
    z-index: 1;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .cards {
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      .card {
        background-color: var(--secondary-color);
        width: 100%;
        box-shadow: var(--custom-shadow);
        position: relative;
        padding: 1rem;
        cursor: pointer;
        transition: 0.15s ease-in-out;

        &:hover {
          transform: scale(1.1);
          box-shadow: 1px 1px 5px 1px #000;
        }

        h4 {
          font-size: 1.2rem;
          padding-bottom: 1rem;
          height: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        p {
          font-size: 1rem;
          padding-bottom: 2rem;
        }
      }
    }
  }

  @media (max-width: 1250px) {
    .container {
      width: 50vw;
      margin: 0 25vw;

      p {
        font-size: 1.4rem;
      }

      .cards {
        flex-direction: column;

        .card {
          margin-bottom: 1rem;

          h4 {
            padding-top: 2rem;
            font-size: 1.5rem;
          }

          p {
            font-size: 1.2rem;
            padding-bottom: 0;
          }
        }
      }
    }
  }

  @media (max-width: 550px) {
    .bg-split {
      height: 7.5%;
    }

    .container {
      width: 70vw;
      margin: 0 15vw;

      p {
        font-size: 1.1rem;
      }

      .cards {
        .card {
          h4 {
            font-size: 1.2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export default ArticleSection;
