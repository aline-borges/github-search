import React from 'react'
import Style from './style';

export const Container = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Container