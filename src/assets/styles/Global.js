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

  button svg {
    margin-left: 15px;
  }

  #place,
  #job,
  #following,
  #followers {
    margin-top: 1px;
  }

  #repository,
  #starPurple {
    margin: 13px 4px 0 0;
  }

  #circle {
    margin: 3px 8px 0 0;
  }

  #starGrey {
    margin: 2px 5px 0 0;
  }

  #place {
    margin-left: -3px;
  }

  body {
    background: #232324;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  }
`;

export default Global