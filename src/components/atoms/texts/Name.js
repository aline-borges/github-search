import React from 'react';
import { FullName } from './style';

const Name = (props) => {
  return(
    <FullName size={props.size} weight={props.weight} color={props.color} margin={props.margin}>
      {props.children}
    </FullName>
  );
}

export default Name  
