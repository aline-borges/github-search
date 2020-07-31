import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#111111',
    darkGrey: '#201F1F',
    grey: '#232324',
    purple: '#8752CC',
    darkPurple: '#562694',
    green: '#24927D',
    darkGreen: '#146A5A',
    white: '#F9F3F3'
  },
  fonts: [
    "sans-serif",  
    "Open Sans",
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