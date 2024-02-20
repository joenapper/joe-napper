import styled, { createGlobalStyle } from "styled-components";
import { colors, deviceBelow, font, fontSize } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${colors.black};
    color: ${colors.white};
    font-family: ${font.secondary};
    font-size: ${fontSize.sm};
    
    @media ${deviceBelow.tablet} {
      font-size: ${fontSize.base};
    }
  }

  ul {
    list-style: none;
    margin-left: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
  }

  a,
  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }
`;

export const Link = styled.a`
  /* TODO: Review to potentially make this animation desktop only */
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
`;

export default GlobalStyles;
