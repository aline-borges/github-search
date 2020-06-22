import React from 'react';
import Style from '../style';

export const Item = (props) => {
  return(
    <Style fontColor="#8752CC">
      {props.text}
    </Style>
  );
}
export default Item 
