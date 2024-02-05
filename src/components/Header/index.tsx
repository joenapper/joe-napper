import { useState } from "react";
import {
  Wrapper,
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

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <Wrapper>
      <NavBar>
        <div className="logo">
          <a href="/">
            <PrimaryText>Joe</PrimaryText> Napper
          </a>
        </div>

        <NavMenu navOpen={navOpen}>
          <NavItem>
            <a href="#projects">Projects</a>
          </NavItem>
          <NavItem>
            <a href="#about">About</a>
          </NavItem>
          <NavItem>
            <a href="#articles">Articles</a>
          </NavItem>
          <NavItem>
            <Button variant="tertiary">Get in touch</Button>
          </NavItem>
        </NavMenu>

        <BurgerMenu
          onClick={toggleNav}
          onKeyUp={toggleNav}
          role="button"
          tabIndex={0}
        >
          <TopLine navOpen={navOpen} />
          <MiddleLine navOpen={navOpen} />
          <BottomLine navOpen={navOpen} />
        </BurgerMenu>
      </NavBar>
    </Wrapper>
  );
};
