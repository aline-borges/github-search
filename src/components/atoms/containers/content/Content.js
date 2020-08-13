import React from 'react';
import Container from '../../atoms/containers/Container';

const Content  = (props) => {
  return(
    <Container direction='row' justify='space-around' align='center' margin={props.margin}>
      {props.children}
    </Container>
  );
}

export default Content 
