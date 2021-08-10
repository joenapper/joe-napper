// Router
import { Link } from "react-router-dom";
// Styled
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <Footer>
      <div className="bg-split"></div>
      <div className="top-footer">
        <div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/joenapper6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Joe Napper
              </a>
            </li>
            <li>
              <a
                href="mailto:joenapper.se@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                joenapper.se@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Socials</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/joenapper6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/joenappercgm?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <a
                href="https://joenapper.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="https://github.com/joenapper"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Info</h4>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <p>&copy;Joe Napper {new Date().getFullYear()}. All rights reserved.</p>
        <div>
          <p>Follow me</p>
          <a
            href="https://www.linkedin.com/in/joenapper6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="brand-icon" icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/joenappercgm?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="brand-icon" icon={faTwitter} />
          </a>
          <a
            href="https://github.com/joenapper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="brand-icon" icon={faGithub} />
          </a>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  background: var(--main-color);
  position: relative;

  .bg-split {
    height: 25%;
    width: 100%;
    position: absolute;
    top: 0;
    background: var(--body-color);
  }

  .top-footer,
  .lower-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-footer {
    background: var(--secondary-color);
    width: 90%;
    margin: 0 5%;
    padding: 4rem 15vw;
    box-shadow: var(--custom-shadow);
    position: relative;
    z-index: 1;

    h4 {
      line-height: 2.3;
    }

    a {
      line-height: 1.7;
      transition: 0.2s ease-in-out;
      color: var(--body-text-color);

      &:hover {
        color: #000;
      }
    }
  }

  .lower-footer {
    padding: 1rem 0rem;
    width: 60vw;
    margin: 0 20vw;

    div {
      display: flex;
      align-items: center;

      .brand-icon {
        font-size: 1.5rem;
        margin-left: 1rem;
        color: var(--body-text-color);
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          transform: scale(1.1);
          color: #000;
        }
      }
    }
  }

  ul {
    list-style: none;

    a {
      text-decoration: none;
      color: #4d4d4d;
    }
  }

  @media (max-width: 1025px) {
    .top-footer {
      padding: 4rem 5vw;

      h4 {
        font-size: 1.3rem;
      }

      a {
        font-size: 1.2rem;
        line-height: 2;
      }
    }
    .lower-footer {
      width: 80vw;
      margin: 0 10vw;
      font-size: 1.2rem;
      padding-bottom: 2rem;

      div {
        .brand-icon {
          font-size: 2rem;
          margin-left: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 550px) {
    .top-footer h4,
    .lower-footer h4 {
      font-size: 1.1rem;
      line-height: 2;
    }

    .top-footer a,
    .lower-footer a {
      font-size: 1rem;
      line-height: 2.5;
    }

    .top-footer div:nth-child(1) {
      display: none;
    }

    .lower-footer p {
      font-size: 0.8rem;
    }

    .lower-footer div {
      p {
        display: none;
      }

      .brand-icon {
        font-size: 1.3rem;
        margin-left: 1.3rem;
      }
    }
  }
`;

export default FooterSection;
