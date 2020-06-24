import React from 'react';
import Style from './style';

export const Icon = (props) => {
  return(
    <Style width={props.size} src={props.src}>
      {props.children}
    </Style>
  );
}

export default Icon 
