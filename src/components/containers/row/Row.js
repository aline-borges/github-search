import React from 'react';
import Style from './style';

export const Row = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Row 
