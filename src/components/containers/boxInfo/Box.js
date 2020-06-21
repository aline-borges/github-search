import React from 'react';
import Style from './style';

export const Box = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Box 
