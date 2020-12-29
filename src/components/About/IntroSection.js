// Styled
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const IntroSection = () => {
  return (
    <Intro>
      <article>
        <p className="intro">
          Im Joe - an experienced web developer based in South Yorkshire.
          Currently working alongside the technical director at CMIS-UK to
          develop the next version of the highly anticipated Rubi CRM system and
          manage over a dozen client portals with Rubi integration.
        </p>
        <div>
          <ul>
            <Link
              activeClass="active"
              to="sports"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <FontAwesomeIcon
                  className="icon-flipped"
                  icon={faLevelDownAlt}
                />
                <a href="#sports">Sports Coaching</a>
              </li>
            </Link>

            <Link
              activeClass="active"
              to="coding"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <FontAwesomeIcon
                  className="icon-flipped"
                  icon={faLevelDownAlt}
                />
                <a href="#coding">Intro to Coding</a>
              </li>
            </Link>

            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <FontAwesomeIcon
                  className="icon-flipped"
                  icon={faLevelDownAlt}
                />
                <a href="#experience">Commercial Experience</a>
              </li>
            </Link>

            <Link
              activeClass="active"
              to="hobbies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <FontAwesomeIcon
                  className="icon-flipped"
                  icon={faLevelDownAlt}
                />
                <a href="#hobbies">Hobbies</a>
              </li>
            </Link>

            <Link
              activeClass="active"
              to="volunteer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <FontAwesomeIcon
                  className="icon-flipped"
                  icon={faLevelDownAlt}
                />
                <a href="#volunteer">Volunteer Work</a>
              </li>
            </Link>
          </ul>
        </div>
      </article>
    </Intro>
  );
};

const Intro = styled.div`
  background: var(--main-color);
  height: 60vh;
  display: flex;
  align-items: center;

  article {
    width: 60vw;
    margin: 0 20vw;
    display: flex;
    justify-content: space-between;

    .intro {
      width: 60%;
      font-size: 1.5rem;
      line-height: 1.5;
      letter-spacing: 2px;
    }

    div {
      display: flex;
      justify-content: flex-end;
      width: 40%;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: right;

        li {
          transition: 0.2s ease-in-out;

          &:hover {
            transform: scale(1.1);
            color: #000;
          }

          .icon-flipped {
            transform: scaleX(-1);
            -moz-transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            -ms-transform: scaleX(-1);
            margin-right: 1rem;
          }

          a {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`;

export default IntroSection;
