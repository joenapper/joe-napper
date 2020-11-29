import { useState } from "react";
import styled from "styled-components";
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
        <div className="logo">Home</div>
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
    navbar ? "rgba(255, 255, 255, 1)" : "transparent"};
  box-shadow: ${({ navbar }) => (navbar ? "1px 1px 5px 1px #919191" : "none")};
`;

const Nav = styled.nav`
  width: 60%;
  margin: auto;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
