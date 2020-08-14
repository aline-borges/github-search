import React from 'react';
import Container from '../container/Container';

const Main = (props) => {
  return(
    <Container direction='column' justify='center' align='center' padding='15px' margin={props.margin}>
     {props.children}
    </Container>
  );
}

export default Main 
