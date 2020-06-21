import React from 'react';
import Style from './style';

export const Title = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Title
