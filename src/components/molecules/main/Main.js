import React from 'react';
import Container from '../../atoms/containers/Container';

const Main = (props) => {
  return(
    <Container direction='column' justify='center' align='center' padding='15px' margin={props.margin}>
     {props.children}
    </Container>
  );
}

export default Main 
