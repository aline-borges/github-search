import React from 'react';
import Style from './style';

const Button = (props) => {
  return(
    <Style margin={props.margin} bgColor={props.bgColor} color={props.color} bgHover={props.bgHover} colorHover={props.colorHover}>
      {props.children}
    </Style>
  );
}

export default Button 
