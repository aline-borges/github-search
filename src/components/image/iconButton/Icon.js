import React from 'react';
import Style from './style';

export const Icon = (props) => {
  return(
    <Style src={props.src}>
      {props.children}
    </Style>
  );
}

export default Icon 
