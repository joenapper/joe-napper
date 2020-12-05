import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* html {
        width: 100vw
    } */

    :root {
        --main-color: #fdda3e;
        --joenapper: #1f1f1f;
        --header-color: #333333;
        --body-text-color: #4d4d4d;
    }

    body {
        background: #f4f4f4;
        overflow-x: hidden;
        font-family: "Montserrat", sans-serif;
        color: var(--body-text-color);
    }

    h1,
    h2,
    button {
        color: var(--header-color)
    }
`;

export default GlobalStyle;
