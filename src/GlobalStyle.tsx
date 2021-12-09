import { Global, css } from "@emotion/react"

const Style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --cursive: "Dancing Script", cursive;
    --sanSerif: "Lato", sans-serif;

    --padding: clamp(1.5rem, 3vw, 2.5rem);
  }

  html {
    width: 100%;
    user-select: none;
  }

  body {
    width: 100%;
    font-family: var(--sanSerif);
  }

  h1 {
    font-size: clamp(1.75rem, 3vw, 3rem);
    font-family: var(--cursive);
  }

  input,
  button {
    border: 0;
    &:focus {
      outline: 0;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const GlobalStyle = () => <Global styles={Style} />

export default GlobalStyle
