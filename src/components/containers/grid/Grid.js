import React from 'react';
import Style from './style';

export const Grid = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Grid 
