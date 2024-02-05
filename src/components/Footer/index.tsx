import { Email } from "../../icons/Email";
import { Instagram } from "../../icons/Instagram";
import { LinkedIn } from "../../icons/LinkedIn";
import { NavItem } from "../Header/styles";
import { PrimaryText } from "../PrimaryText";
import { FooterWrapper, FooterContent, NavItems, Icons } from "./styles";

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <div>
        <p>
          <PrimaryText>Joe</PrimaryText> Napper
        </p>
      </div>

      <NavItems>
        <NavItem>
          <a href="#projects">Projects</a>
        </NavItem>
        <NavItem>
          <a href="#about">About</a>
        </NavItem>
        <NavItem>
          <a href="#articles">Articles</a>
        </NavItem>
      </NavItems>

      <Icons>
        <Instagram />
        <LinkedIn />
        <Email />
      </Icons>
    </FooterContent>
  </FooterWrapper>
);
