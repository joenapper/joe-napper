// Images
// import HTML from "../media/html.png";
// import CSS from "../media/css.png";
// import Sass from "../media/sass.png";
// import JavaScript from "../media/js.png";
// import React from "../media/react.png";
// import Node from "../media/node.svg";
// import Python from "../media/python.png";
// import Flask from "../media/flask.png";
// import Django from "../media/django.png";
// import vb from "../media/vb.png";
// Styled
import styled from "styled-components";

const TechnologySection = () => {
  return (
    <Expertise>
      {/* Skillset or */}
      <h2>Expertise</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        temporibus molestiae doloremque dolorum numquam ipsam?
      </p>
      {/* <Display>
        <div className="front-end">
          <div className="skill">
            <img src={HTML} alt="HTML" />
            <img src={CSS} alt="CSS" />
            <img src={Sass} alt="Sass" />
            <img src={JavaScript} alt="JavaScript" />
            <img src={React} alt="React" />
          </div>
        </div>
        <div className="back-end">
          <div className="skill">
            <img src={Node} alt="Node.js" />
            <img src={Python} alt="Python" />
            <img src={Flask} alt="Flask" />
            <img src={Django} alt="Django" />
            <img src={vb} alt="VisualBasic.net" />
          </div>
        </div>
      </Display> */}
    </Expertise>
  );
};

const Expertise = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Display = styled.div`
  background-color: coral;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .front-end,
  .back-end {
    background-color: red;
    .skill {
      display: flex;
      img {
        height: 100px;
        width: 100px;
        /* object-fit: cover; */
      }
    }
  }
`;

export default TechnologySection;
