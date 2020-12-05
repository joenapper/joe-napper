import styled from "styled-components";
import { Link } from "react-router-dom";

const RightNav = ({ open }) => {
  function mode() {
    document.documentElement.style.setProperty("--main-color", "#282629");
    document.documentElement.style.setProperty("--joenapper", "#f4f4f4");
    document.documentElement.style.setProperty("--header-color", "#ccc");
    document.documentElement.style.setProperty("--body-text-color", "#f4f4f4");
  }
  return (
    <NavList open={open}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <a onClick={mode}>Dark Mode</a>
        {/* <button>Dark Mode</button> */}
      </li>
    </NavList>
  );
};

const NavList = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 3rem;

    /* &:nth-child(4) {
      background-color: green;
    } */

    a {
      text-decoration: none;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: #fdda3e;
        transition: width 0.4s;
      }

      &:hover::after {
        width: 100%;
      }
    }

    button {
      background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: #ccc;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    transition: transform 0.5s ease-in-out;

    li {
      margin: 0;
    }
  }
`;

export default RightNav;
