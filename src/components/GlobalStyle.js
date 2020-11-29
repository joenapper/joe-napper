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
        --main-color: #fdda3e
    }

    body {
        background: #f4f4f4;
        overflow-x: hidden;
        font-family: "Montserrat", sans-serif;
        color: #4d4d4d;
    }

    $mainColor: yellow;

    h1,
    h2,
    button {
        color: #333333
    }
`;

export default GlobalStyle;
