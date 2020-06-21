import React from 'react';
import Style from './style';

export const Name = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Name 
