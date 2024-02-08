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

  return (
    <HeaderWrapper>
      <NavBar>
        <div>
          <a href="/">
            <PrimaryText>Joe</PrimaryText> Napper
          </a>
        </div>

        <NavMenu $navOpen={navOpen}>
          <NavItem>
            <Link href="#projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link href="#about">About</Link>
          </NavItem>
          <NavItem>
            <Link href="#articles">Articles</Link>
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
          <TopLine $navOpen={navOpen} />
          <MiddleLine $navOpen={navOpen} />
          <BottomLine $navOpen={navOpen} />
        </BurgerMenu>
      </NavBar>
    </HeaderWrapper>
  );
};
