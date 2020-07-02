import React from 'react';
import Style from '../style';

export const Item = (props) => {
  return(
    <Style fontColor='#57D9C1'>
      <a href={props.src}>
        {props.text}
      </a>
    </Style>
  );
}
export default Item 
