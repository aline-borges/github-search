import React from 'react';
import Style from './style';
import Icon from '../icon/Icon';
import search from '../../../assets/icons/search.svg';

export const Button = (props) => {
  return(
    <Style>
      {props.children}
      <Icon src={search} alt='search-icon' />
    </Style>
  );
}

export default Button
