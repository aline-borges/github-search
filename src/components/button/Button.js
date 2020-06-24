import React from 'react';
import Style from './style';
import Icon from '../image/iconButton/Icon';

const Button = (props) => {
  return(
    <Style color={props.fontColor} backgroundColor={props.backgroundColor} hoverColor={props.hoverColor}>
      {props.children}
      <Icon src={props.src} alt={props.alt} size={props.iconWidth} />
    </Style>
  );
}

export default Button
