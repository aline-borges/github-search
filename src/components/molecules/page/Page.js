import React from 'react';
import Container from '../../atoms/containers/Container';

const Page  = (props) => {
  return(
    <Container direction='row' justify='space-around' align='center' margin='100px 0 0'>
      {props.children}
    </Container>
  );
}

export default Page 
