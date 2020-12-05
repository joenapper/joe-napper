// Styled
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <Footer>
      <div className="top-footer">
        <div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/joenapper6/" target="_blank">
                Joe Napper
              </a>
            </li>
            <li>
              <a href="mailto:joenapper.se@gmail.com" target="_blank">
                joenapper.se@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/joenapper6/" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/joenappercgm?lang=en"
                target="_blank"
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
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="https://github.com/joenapper" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Info</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <p>&copy;Joe Napper 2020. All rights reserved.</p>
        <div>
          <p>Follow me</p>
          <FontAwesomeIcon className="brand-icon" icon={faLinkedin} />
          <FontAwesomeIcon className="brand-icon" icon={faTwitter} />
          <FontAwesomeIcon className="brand-icon" icon={faGithub} />
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  background: var(--main-color);

  .top-footer,
  .lower-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-footer {
    background: #fff;
    width: 90%;
    margin: 0 5%;
    padding: 4rem 15vw;
    transform: translateY(-25%);
    box-shadow: 1px 1px 5px 1px #ccc;

    h4 {
      line-height: 2.3;
    }

    a {
      line-height: 1.7;
      transition: 0.2s ease-in-out;

      &:hover {
        color: #000;
      }
    }
  }

  .lower-footer {
    padding-bottom: 1rem;
    width: 60vw;
    margin: 0 20vw;

    div {
      display: flex;
      align-items: center;

      .brand-icon {
        font-size: 1.5rem;
        margin-left: 1rem;
        color: #333333;
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
`;

export default FooterSection;
