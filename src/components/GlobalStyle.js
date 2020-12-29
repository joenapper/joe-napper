// Styled
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --main-color: #fdda3e;
        --secondary-color: #fff;
        --joenapper: #1f1f1f;
        --header-color: #333333;
        --body-color: #f4f4f4;
        --body-text-color: #4d4d4d;
        --custom-shadow: 1px 1px 5px 1px #ccc;
    }

    body {
        background: var(--body-color);
        overflow-x: hidden;
        font-family: "Montserrat", sans-serif;
        color: var(--body-text-color);
    }

    h1,
    h2,
    button {
        color: var(--header-color)
    }

    a {
        text-decoration: none;
        color: var(--header-color);
    }
`;

export default GlobalStyle;
