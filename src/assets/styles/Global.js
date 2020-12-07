import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
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
    margin-left: 1.5rem;
  }

  .smallIcon {
    margin-top: 0.1rem;
  }

  .repository {
    margin: 1.3rem 0.4rem 0 0;
  }

  #circle {
    margin: 0.3rem 0.8rem 0 0;
  }

  #starGrey {
    margin: 0.2rem 0.5rem 0 0;
  }

  #place {
    margin-left: -0.3rem;
  }

  #homeIcon {
    padding-top: 0.5rem;
  }

  .largeIcon {
    margin: auto auto 1.5rem auto;
  }

  #list {
    margin-top: 1.5rem;
  }

  span {
    color: #7D4DBB;
    font-weight: 800;
  }

`;

export default Global