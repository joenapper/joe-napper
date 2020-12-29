import { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Styled
import styled from "styled-components";
// Components
import Burger from "./Burger";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const addBackground = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", addBackground);

  return (
    <Header navbar={navbar}>
      <Nav>
        <Link to="/">Home</Link>
        <Burger />
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 1;
  transition: all 0.1s ease-in-out;
  background: ${({ navbar }) =>
    navbar ? "var(--secondary-color)" : "transparent"};
  box-shadow: ${({ navbar }) => (navbar ? "var(--custom-shadow)" : "none")};
`;

const Nav = styled.nav`
  width: 60%;
  margin: auto;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1.1rem;
    text-decoration: none;
    color: var(--header-color);
    font-weight: 400;
    letter-spacing: 2px;
  }

  @media (max-width: 1025px) {
    width: 80%;

    a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    .mode {
      font-size: 4.5rem;
    }
  }

  @media (max-width: 550px) {
    height: 10vh;
    width: 90%;

    a {
      font-size: 1.2rem;
    }
  }
`;

export default Navbar;
