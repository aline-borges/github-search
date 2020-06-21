import React from 'react';
import Style from './style';

export const Photo = (props) => {
  return(
    <Style src={props.src}>
      {props.children}
    </Style>
  );
}

export default Photo 
