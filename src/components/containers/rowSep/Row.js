import React from 'react';
import Style from './style';

const RowOptions = (props) =>{
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default RowOptions
