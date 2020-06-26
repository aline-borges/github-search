import React from 'react';
import Style from './style';
import Icon from '../image/iconButton/Icon';

const Button = (props) => {
  return(
    <Style border={props.border} backgroundColor={props.backgroundColor} fontColor={props.fontColor} backgroundHover={props.backgroundHover} colorHover={props.colorHover}>
      {props.children}
      <Icon src={props.src} alt={props.alt} size={props.iconWidth} />
    </Style>
  );
}

export default Button
