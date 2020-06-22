import React from 'react';
import Style from '../style';
import Icon from '../../image/iconButton/Icon';
import plus from '../../../assets/icons/plus.svg';

export const Button = (props) => {
  return(
    <Style backgroundColor="#57D9C1" fontColor="#3F3F46" hoverColor="#32cfb1">
      {props.children}
      <Icon src={plus} alt='plus-icon' />
    </Style>
  );
}

export default Button
