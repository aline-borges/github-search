import React from 'react';
import { UserName } from './style';

const Username = (props) => {
  return(
    <UserName>
      {props.children}
    </UserName>
  );
}

export default Username  