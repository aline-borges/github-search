import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #232324;
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    overflow: hidden;
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

  .smallIcon {
    margin-top: 1px;
  }

  .repository {
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

  #homeIcon {
    padding-top: 5px;
  }

  .largeIcon {
    margin: auto auto 15px auto;
  }

  #list {
    margin-top: 15px;
  }

  span {
    color: #7D4DBB;
    font-weight: 800;
  }

`;

export default Global