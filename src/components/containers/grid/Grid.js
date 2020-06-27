import React from 'react';
import { GridCenter } from '../style';

const Grid = (props) => {
  return(
    <GridCenter>
      {props.children}
    </GridCenter>
  );
}

export default Grid 
