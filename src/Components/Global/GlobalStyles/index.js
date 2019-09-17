import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }

  a, a:hover {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
  }

  button:focus {
    outline: none;
  }
`;
