import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #232324;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    overflow-x: hidden;
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

  #repoLogo,
  #starLogo,
  #followLogo {
    margin: auto auto 15px auto;
  }
`;

export default Global