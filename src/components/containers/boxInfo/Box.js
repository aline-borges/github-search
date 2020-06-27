import React from 'react';
import { ColumnStart } from '../style';

const Box = (props) => {
  return(
    <ColumnStart>
      {props.children}
    </ColumnStart>
  );
}

export default Box 
