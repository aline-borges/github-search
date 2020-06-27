import React from 'react';
import { Col } from '../style';

const Column = (props) => {
  return(
    <Col>
      {props.children}
    </Col>
  );
}

export default Column 
