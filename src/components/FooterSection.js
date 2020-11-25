// Styled
import styled from "styled-components";

const FooterSection = () => {
  return (
    <Footer>
      <div className="top-footer">
        <div>
          <p>Joe Napper</p>
          <p>joenapper.se@gmail.com</p>
        </div>
        <div>
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Twitter</a>
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
              <a href="#">Github</a>
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
        <p>&copy;2020 JoeNapper. All rights reserved.</p>
        <p>Follow me LINKS LINKS LINKS LINKS</p>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  background: #fdda3e;
  padding: 2rem 0;
  .top-footer,
  .lower-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin: 0 auto;
  }
  .top-footer {
    padding-bottom: 2rem;
    ul {
      list-style: none;
      li {
        a {
          text-decoration: none;
          color: red;
        }
      }
    }
  }
`;

export default FooterSection;
