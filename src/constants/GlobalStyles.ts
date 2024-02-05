import { createGlobalStyle, css } from "styled-components";
import { colors, fontSize } from "./theme";
import { mediaBelow } from "./media";

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
    font-family: "Montserrat", sans-serif;
    font-size: ${fontSize.sm};
    
    ${mediaBelow.tablet(css`
      font-size: ${fontSize.base};
    `)}
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

export default GlobalStyles;
