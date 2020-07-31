import React from 'react';
import Style from './style';

const Button = (props) => {
  return(
    <Style margin={props.margin} bgColor={props.color} bgHover={props.hover}>
      {props.children}
    </Style>
  );
}

export default Button 
