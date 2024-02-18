import { Email } from "@icons/Email";
import { Instagram } from "@icons/Instagram";
import { LinkedIn } from "@icons/LinkedIn";
import { NavItem } from "../Header/styles";
import { PrimaryText } from "../PrimaryText";
import { FooterWrapper, FooterContent, NavItems, Icons } from "./styles";
import { Link } from "@constants/GlobalStyles";
import { links, supportEmail } from "@constants/App.constants";

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
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href={links.linkedIn} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a href={`mailto:${supportEmail}`}>
          <Email />
        </a>
      </Icons>
    </FooterContent>
  </FooterWrapper>
);
