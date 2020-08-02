import React from 'react';
import { SmallIcon } from './style';

const Icon = (props) => {
  return(
    <SmallIcon>
      {props.children}
    </SmallIcon>
  );
}

export default Icon  