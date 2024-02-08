import { Email } from "@icons/Email";
import { Instagram } from "@icons/Instagram";
import { LinkedIn } from "@icons/LinkedIn";
import { NavItem } from "../Header/styles";
import { PrimaryText } from "../PrimaryText";
import { FooterWrapper, FooterContent, NavItems, Icons } from "./styles";
import { Link } from "@constants/GlobalStyles";

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
          <Link href="#projects">Projects</Link>
        </NavItem>
        <NavItem>
          <Link href="#about">About</Link>
        </NavItem>
        <NavItem>
          <Link href="#articles">Articles</Link>
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
