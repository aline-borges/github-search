import React from 'react';
import Style from '../style';

export const Title = (props) => {
  return(
    <Style fontColor="#57D9C1">
      {props.text}
    </Style>
  );
}

export default Title 
