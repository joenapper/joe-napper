// Images
import HTML from "../media/html.png";
import CSS from "../media/css.png";
import Sass from "../media/sass.png";
import JavaScript from "../media/js.png";
import React from "../media/react.png";
import Node from "../media/node.png";
import Python from "../media/python.png";
// Styled
import styled from "styled-components";

const ExpertiseSection = () => {
  return (
    <div>
      <Expertise>
        <div className="expertise-container">
          <div className="expertise-text">
            <article>
              <h2>Expertise</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate corrupti suscipit, praesentium rem aut distinctio
                perferendis, ab modi consectetur deserunt laudantium magnam qui
                amet vero?
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
      </Expertise>
    </div>
  );
};

const Expertise = styled.div`
  background: #f4f4f4;
  .expertise-container {
    //display: block;
    width: 90%;
    margin-left: 10%;
    background: #fff;
    box-shadow: 1px 1px 5px 1px #ccc;
    transform: translateY(50%);
    position: relative;
    .expertise-text {
      display: flex;
      align-items: center;
      /* width: 90%;
      margin-left: 10%;
      background: #fff;
      border: 1px solid #c4c4c4;
      transform: translateY(50%);
      position: relative; */
      article {
        padding: 4rem 20% 2rem 10%;
        width: 100%;
        text-align: right;
        h2 {
          font-size: 2rem;
          padding-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
    .expertise-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 10%;
      padding-bottom: 4rem;
      img {
        padding: 0rem 1rem;
      }
    }
  }
`;

export default ExpertiseSection;
