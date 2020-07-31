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

  svg {
    margin-left: 15px;
  }

  body {
    background: #232324;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  }
`;

export default Global