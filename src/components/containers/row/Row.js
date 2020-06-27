import React from 'react';
import { RowStart } from '../style';

const Row = (props) => {
  return(
    <RowStart>
      {props.children}
    </RowStart>
  );
}

export default Row 
