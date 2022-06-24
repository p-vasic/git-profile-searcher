import { createGlobalStyle, ThemeProps } from "styled-components";
import { GlobalThemeProps } from "./model";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0; 
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit; 
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 

        @media only screen and (max-width: 900px) {
            font-size: 56%;    
        }
    }


    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6;
        color: ${(p: ThemeProps<GlobalThemeProps>) => p.theme.textColor};
        /* background-color: #F0F1F6; */
        background-color: #F5F6FA;
        background-color: ${(p: ThemeProps<GlobalThemeProps>) => p.theme.bgColor};
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;