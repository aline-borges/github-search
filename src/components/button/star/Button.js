import React from 'react';
import Style from '../style';
import Icon from '../../image/iconButton/Icon';
import plus from '../../../assets/icons/plus.svg';

export const Button = (props) => {
  return(
    <Style backgroundColor="#8752CC" fontColor="#3F3F46" hoverColor="#6426B2">
      {props.children}
      <Icon src={plus} alt='plus-icon' />
    </Style>
  );
}

export default Button