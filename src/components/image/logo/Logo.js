import React from 'react';
import Style from './style';
import logo from '../../assets/images/github-logo.png';

export const Logo = (props) => {
  return(
    <Style src={logo}>
      {props.children}
    </Style>
  );
}

export default Logo
