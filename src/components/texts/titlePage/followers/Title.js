import React from 'react';
import Style from '../style';

export const Title = (props) => {
  return(
    <Style fontColor="#E7E4FF">
      {props.text}
    </Style>
  );
}

export default Title 