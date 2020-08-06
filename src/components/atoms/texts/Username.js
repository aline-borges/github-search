import React from 'react';
import { UserName } from './style';

const Username = (props) => {
  return(
    <UserName size={props.size} weight={props.weight} color={props.color} margin={props.margin}>
      {props.children}
    </UserName>
  );
}

export default Username  