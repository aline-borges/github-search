import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    darkPurple: "#6426B2",
    lightPurple: "#8752CC",
    darkTurquoise: "#32cfb1",
    turquoise: "#57D9C1",
    lightTurquoise: "#A8EFE2",
    darkGrey: "#3F3F46",
    grey: "#A1A0B2",
    lightGrey: "#E7E4FF",
    white: "#FFFFFF",
    background: 'linear-gradient(45deg, #8752CC, #5452CC, #6C79CC, #709ED1, #89E5D5, #52A0CC)'
  },
  fonts: [
    "sans-serif", 
    "Roboto", 
    "Roboto Mono", 
    "Open Sans",
    "Montserrat",
    "Franklin Gothic Book"
  ],
  fontSizes: {
    superSmall: "12px",
    extraSmall: "14px",
    small: "16px",
    medium: "18px",
    extraMedium: "24px",
    superMedium: "36px",
    large: "48px",
    extraLarge: "60px",
    superLarge: "72px"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

export default Theme;