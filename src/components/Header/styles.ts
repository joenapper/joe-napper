import styled, { css } from "styled-components";
import { colors, spacing } from "@constants/theme";
import type { NavProps } from "./types";
import { mediaBelow } from "@constants/media";

export const Wrapper = styled.header`
  width: 100%;
  /* TODO: Align with Container component */
  padding: ${spacing.s4} 10%;
  color: ${colors.white};

  ${mediaBelow.tablet(css`
    padding: ${spacing.s4};
  `)};
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  position: relative;

  ${mediaBelow.tablet(css`
    position: static;
  `)}
`;

export const NavMenu = styled.ul<NavProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${mediaBelow.tablet(css`
    position: absolute;
    /* TODO: Review padding here */
    padding: 14vh 0 16vh 0;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: ${colors.black};
    /* TODO: Review width here */
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({ navOpen }) =>
      navOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.35s ease-in;
    overflow-x: hidden;
    z-index: 1;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: ${spacing.s2};
      height: 100%;
      background-color: ${colors.primary};
    }
  `)}
`;

export const NavItem = styled.li`
  padding-right: ${spacing.s8};

  ${mediaBelow.tablet(css`
    padding: 0;
    opacity: 0;
    display: contents;
  `)}

  /* TODO: Review to potentially make this animation desktop only */
  a {
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background-color: ${colors.primary};
      transition: width 0.4s;
    }

    &:hover::after {
      width: 100%;
      transition: 0.4s;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  ${mediaBelow.tablet(css`
    display: block;
    cursor: pointer;
  `)}
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${colors.white};
  margin: 5px;
  border-radius: 4px;
  transition: all 0.75s ease;
`;

export const TopLine = styled(Line)<NavProps>`
  background: ${colors.primary};
  transform: ${({ navOpen }) =>
    navOpen && "rotate(-45deg) translate(-5px, 6px)"};
`;

export const MiddleLine = styled(Line)<NavProps>`
  opacity: ${({ navOpen }) => navOpen && 0};
`;

export const BottomLine = styled(Line)<NavProps>`
  background: ${colors.primary};
  transform: ${({ navOpen }) =>
    navOpen && "rotate(45deg) translate(-5px, -6px)"};
`;
