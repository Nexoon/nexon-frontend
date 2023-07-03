import { css } from "@emotion/react";

export const GlobalStyle = css`
    body {
        margin: 0;
        display: flex;
        place-items: center;
        background-color: #FEFEFE;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li,
    ul {
        list-style: none;
    }

    button {
        display: block;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }
`;
