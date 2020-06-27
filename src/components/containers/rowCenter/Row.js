import React from 'react';
import { RowCenter } from '../style';

const RowOptions = (props) =>{
  return(
    <RowCenter>
      {props.children}
    </RowCenter>
  );
}

export default RowOptions
