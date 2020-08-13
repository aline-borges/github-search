import React from 'react';
import { GithubIcon } from './style';
import logo from '../../../assets/images/logo.png';

const Logo = (props) => {
  return(
    <GithubIcon margin={props.margin} src={logo} alt='github-icon' width={props.width} />
  );
}

export default Logo 
