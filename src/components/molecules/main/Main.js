import React from 'react';
import Container from '../../atoms/containers/Container';
import Text from '../text/Text';
import Form from '../form/Form';

const Main = () => {
  return(
    <Container direction='column' justify='center' align='center' padding='15px'>
      <Text />
      <Form />
    </Container>
  );
}

export default Main 
