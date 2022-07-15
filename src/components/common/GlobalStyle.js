import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'Open Sans', sans-serif;

        --color-dark-1: #454A5D;
        --color-dark-2: #BABAC4;
        --color-dark-3: #878695;
        --color-dark-4: #F7F7F8;

        --blue-color: #2230E6;
        --red-color: #EB9A8F;
        
    }
`;

export default GlobalStyle;
