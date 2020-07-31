import React from 'react';
import { GithubIcon } from './style';
import github from '../../../assets/images/GitHub-Icon.png';

const Logo = (props) => {
  return(
    <GithubIcon margin={props.margin} src={github} alt='github-icon' width={props.width} />
  );
}

export default Logo 
