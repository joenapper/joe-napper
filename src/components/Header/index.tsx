import { useState } from "react";
import {
  HeaderWrapper,
  NavBar,
  NavMenu,
  NavItem,
  BurgerMenu,
  TopLine,
  MiddleLine,
  BottomLine,
} from "./styles";
import { PrimaryText } from "../PrimaryText";
import { Button } from "../Button";
import { Link } from "@constants/GlobalStyles";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const handleNavItemClick = () => {
    if (navOpen) {
      setNavOpen(false);
    }
  };

  return (
    <HeaderWrapper>
      <NavBar>
        <div>
          <PrimaryText>Joe</PrimaryText> Napper
        </div>

        <NavMenu $navOpen={navOpen}>
          <NavItem onClick={handleNavItemClick}>
            <Link href="#projects">Projects</Link>
          </NavItem>
          <NavItem onClick={handleNavItemClick}>
            <Link href="#about">About</Link>
          </NavItem>
          <NavItem onClick={handleNavItemClick}>
            <Link href="#articles">Articles</Link>
          </NavItem>
          <NavItem onClick={handleNavItemClick}>
            <Button variant="tertiary">
              <a href="#contact">Get in touch</a>
            </Button>
          </NavItem>
        </NavMenu>

        <BurgerMenu
          onClick={toggleNav}
          onKeyUp={toggleNav}
          role="button"
          tabIndex={0}
          $navOpen={navOpen}
        >
          <TopLine $navOpen={navOpen} />
          <MiddleLine $navOpen={navOpen} />
          <BottomLine $navOpen={navOpen} />
        </BurgerMenu>
      </NavBar>
    </HeaderWrapper>
  );
};
