import React from 'react';
import Style from './style';

const Button = (props) => {
  return(
    <Style margin={props.margin} padding={props.padding} width={props.width} bgColor={props.bgColor} color={props.color} size={props.size} lineHeight={props.lineHeight} bgHover={props.bgHover} colorHover={props.colorHover}>
      {props.children}
    </Style>
  );
}

export default Button 
