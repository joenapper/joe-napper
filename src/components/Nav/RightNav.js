// Router
import { Link } from "react-router-dom";
// Styled
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
// Components
import Mode from "./Mode";

const RightNav = ({ open }) => {
  return (
    <NavList open={open}>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <a
          href="https://joenapper.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Articles
          <FontAwesomeIcon className="third-party" icon={faCaretRight} />
        </a>
      </li>
      <Mode />
    </NavList>
  );
};

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    margin-left: 3rem;

    a {
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: var(--main-color);
        transition: width 0.4s;
      }

      &:hover::after {
        width: 100%;
      }
    }

    &:nth-child(2) {
      a {
        display: flex;
        align-items: center;

        .third-party {
          margin-left: 0.2rem;
          font-size: 1.5rem;
          opacity: 0;
          transition: 0.2s ease-in-out;
        }
      }

      &:hover {
        .third-party {
          opacity: 1;
        }
      }
    }

    svg {
      cursor: pointer;
    }

    button {
      background-color: transparent;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: var(--secondary-color);
    box-shadow: var(--custom-shadow);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    transition: transform 0.5s ease-in-out;

    li {
      margin: 0;

      &:nth-child(2) {
        a {
          .third-party {
            margin-left: 0.4rem;
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default RightNav;
