import React from 'react';
import Style from './style';

export const Column = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Column 
