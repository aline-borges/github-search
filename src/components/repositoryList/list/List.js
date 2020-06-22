import React from 'react';
import Style from './style';

export const List = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default List 
