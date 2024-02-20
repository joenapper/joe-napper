import styled from "styled-components";
import { colors, deviceBelow, spacing } from "@constants/theme";
import type { NavProps } from "./types";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: ${spacing.s4} 10%;
  color: ${colors.white};

  @media ${deviceBelow.tablet} {
    padding: ${spacing.s4};
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  position: relative;

  @media ${deviceBelow.tablet} {
    position: static;
  }
`;

export const NavMenu = styled.ul<NavProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${deviceBelow.tablet} {
    position: fixed;
    /* TODO: Review padding here */
    padding: 14vh 0 16vh 0;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: ${colors.black};
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({ $navOpen }) =>
      $navOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.35s ease-in;
    overflow-x: hidden;
    z-index: 1;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: ${spacing.s2};
      height: 100%;
      background-color: ${colors.primary};
    }
  }
`;

export const NavItem = styled.li`
  padding-right: ${spacing.s8};

  @media ${deviceBelow.tablet} {
    padding: 0;
    opacity: 0;
    display: contents;
  }
`;

export const BurgerMenu = styled.div<NavProps>`
  display: none;

  @media ${deviceBelow.tablet} {
    display: block;
    cursor: pointer;
    z-index: 1;
    position: ${({ $navOpen }) => $navOpen && "fixed"};
    right: ${({ $navOpen }) => $navOpen && spacing.s4};
  }
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
  transform: ${({ $navOpen }) =>
    $navOpen && "rotate(-45deg) translate(-5px, 6px)"};
`;

export const MiddleLine = styled(Line)<NavProps>`
  opacity: ${({ $navOpen }) => $navOpen && 0};
`;

export const BottomLine = styled(Line)<NavProps>`
  background: ${colors.primary};
  transform: ${({ $navOpen }) =>
    $navOpen && "rotate(45deg) translate(-5px, -6px)"};
`;
