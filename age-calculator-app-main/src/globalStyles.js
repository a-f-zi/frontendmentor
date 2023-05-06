import { createGlobalStyle } from "styled-components";
import italic from "./fonts/Poppins-Italic.ttf";
import bold from "./fonts/Poppins-Bold.ttf";
import xBold from "./fonts/Poppins-ExtraBoldItalic.ttf";
import regular from "./fonts/Poppins-Regular.ttf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Poppins";
    src: local("Poppins"),
    url("${italic}") format("truetype");
    font-style: italic;
  }

  @font-face {
    font-family: "Poppins";
    src: local("Poppins"),
    url("${bold}") format("truetype");
    font-weight: 700;
  }

  @font-face {
    font-family: "Poppins";
    src: local("Poppins"),
    url("${xBold}") format("truetype");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Poppins";
    src: local("Poppins"),
    url("${regular}") format("truetype");
    font-weight: 400;
  }

  :root {
    --purple: hsl(259, 100%, 65%);
    --lightRed: hsl(0, 100%, 67%);
    --white: hsl(0, 0%, 100%);
    --offWhite: hsl(0, 0%, 94%);
    --lightGrey: hsl(0, 0%, 86%);
    --smokeyGrey: hsl(0, 1%, 44%);
    --offBlack: hsl(0, 0%, 8%);
  }

  body {
    font-family: "Poppins";
    height: 100vh;
    margin: 0;
    background: var(--lightGrey);
    padding: 1rem;

  }

  @media screen and (min-width: 350px) {
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
  }

  @media screen and (max-height: 330px) {
    body {
      align-items: start;
    }
  }
`;

export default GlobalStyle;
