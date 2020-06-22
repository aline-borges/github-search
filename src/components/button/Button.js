import React from 'react';
import Style from './style';
import Icon from '../image/iconButton/Icon';

export const Button = (props) => {
  return(
    <Style>
      {props.children}
      <Icon src={props.src} alt={props.alt} />
    </Style>
  );
}

export default Button
