import React from 'react';
import Style from './style';

export const Input = (props) => {
  return(
    <Style placeholder={props.text}>
      {props.children}
    </Style>
  );
}

export default Input
