import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  body {
    background: #3F3F46;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    text-align: center;
  }
`;

export default Global