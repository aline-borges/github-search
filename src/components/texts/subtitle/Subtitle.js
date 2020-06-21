import React from 'react';
import Style from './style';

export const Subtitle = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Subtitle