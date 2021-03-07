// Styled
import styled from "styled-components";
// Images
import HTML from "../../media/html.png";
import CSS from "../../media/css.png";
import Sass from "../../media/sass.png";
import JavaScript from "../../media/js.png";
import React from "../../media/react.png";
import Node from "../../media/node.png";
import Python from "../../media/python.png";

const ExpertiseSection = () => {
  return (
    <div>
      <Expertise>
        <div className="expertise-container">
          <div className="expertise-text">
            <article>
              <h2>Expertise</h2>
              <p>
                To build great applications, not only do you need expertise in
                the technologies you use, you also need to be versatile and have
                the ability to adapt to new technologies and keep up with modern
                design trends to stay ahead of your competition.
              </p>
            </article>
          </div>

          <div className="expertise-icons">
            <img src={HTML} alt="HTML" />
            <img src={CSS} alt="CSS" />
            <img src={Sass} alt="Sass" />
            <img src={JavaScript} alt="JavaScript" />
            <img src={React} alt="React" />
            <img src={Node} alt="Node.js" />
            <img src={Python} alt="Python" />
          </div>
        </div>
        <div className="bg-split"></div>
      </Expertise>
    </div>
  );
};

const Expertise = styled.div`
  background: var(--body-color);
  position: relative;

  .bg-split {
    position: absolute;
    height: 50%;
    width: 100%;
    bottom: 0;
    background: var(--main-color);
  }

  .expertise-container {
    width: 90vw;
    margin-left: 10vw;
    background: var(--secondary-color);
    box-shadow: var(--custom-shadow);
    position: relative;
    z-index: 1;

    .expertise-text {
      display: flex;
      align-items: center;

      article {
        padding: 4rem 20vw 2rem 10vw;
        text-align: right;

        h2 {
          font-size: 2rem;
          padding-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.5;
          text-align: left;
        }
      }
    }

    .expertise-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 15vw;
      padding-bottom: 4rem;
      width: 50vw;

      img {
        transition: 0.2s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 1025px) {
    .expertise-container {
      .expertise-text {
        article {
          padding: 4rem 10vw 4rem 10vw;

          p {
            font-size: 1.4rem;
          }
        }
      }

      .expertise-icons {
        margin-left: 10vw;
        width: 70vw;
      }
    }
  }

  @media (max-width: 550px) {
    .expertise-container {
      width: 95vw;
      margin-left: 5vw;

      .expertise-text {
        article {
          padding: 2rem 5vw;

          h2 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }

      .expertise-icons {
        margin-left: 5vw;
        padding-bottom: 2rem;
        width: 85vw;

        img {
          max-height: 44px;
          max-width: 44px;
        }
      }
    }
  }
`;

export default ExpertiseSection;
