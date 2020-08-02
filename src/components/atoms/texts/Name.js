import React from 'react';
import { FullName } from './style';

const Name = (props) => {
  return(
    <FullName>
      {props.children}
    </FullName>
  );
}

export default Name  
