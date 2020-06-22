import React from 'react';
import Style from '../style';

export const Title = (props) => {
  return(
    <Style fontColor="#8752CC">
      {props.text}
    </Style>
  );
}

export default Title 
