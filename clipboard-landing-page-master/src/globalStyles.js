import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');

  :root {
    --strongCyan: hsl(171, 66%, 44%);
    --lightBlue: hsl(233, 100%, 69%);
    --darkGrayishBlue: hsl(210, 10%, 33%);
    --grayishBlue: hsl(201, 11%, 66%);
    --themeFont: 'Bai Jamjuree', sans-serif;
    --themeFontSize: 18px;
  }

  body {
    font-family: var(--themeFont);
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.9rem;
    color: var(--darkGrayishBlue);
    margin: 0;
  }

  h2 {
    font-size: 1.8rem;
    color: var(--darkGrayishBlue);
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    color: var(--grayishBlue);
    line-height: 1.6rem;
    font-size: 1.1rem;
    margin: 0;
    margin-bottom: 3rem;
  }

  button {
    padding: 1rem;
    width: 100%;
    border-radius: 2rem;
    margin: 0.5rem 0;
    border: none;
    background: var(--strongCyan);
    color: white;
    font-weight: 600;
    font-size: 0.9rem;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  .blue {
    background: var(--lightBlue);
  }
`;

export default GlobalStyle;
