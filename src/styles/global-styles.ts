import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1280px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        color: ${({ theme }) => theme.colors.primary};
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fontFamily.roboto};
        font-weight: 400;
    }

    body {
      background: ${({ theme }) => theme.colors.background}
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
