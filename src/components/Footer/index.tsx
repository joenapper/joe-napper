import { Instagram } from "@icons/Instagram";
import { LinkedIn } from "@icons/LinkedIn";
import { NavItem } from "../Header/styles";
import { PrimaryText } from "../PrimaryText";
import { FooterWrapper, FooterContent, NavItems, Icons, Icon } from "./styles";
import { Link } from "@constants/GlobalStyles";
import { links } from "@constants/App.constants";

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
        <Icon
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </Icon>
        <Icon
          href={links.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </Icon>
      </Icons>
    </FooterContent>
  </FooterWrapper>
);
