import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        background-color: var(--background);
        font-family: 'Italiana', serif;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Italiana', serif;
    }

    :root {
        --background: #f6f6f6;
    }


`