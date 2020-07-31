import React from 'react';
import Container from '../../atoms/containers/Container';
import Paragraph from '../../atoms/texts/Paragraph';

const Text = () => {
  return(
    <Container direction='column' justify='left' margin='0 0 15px'>
      <Paragraph weight='900' size='24px'>Find a User</Paragraph>
      <Paragraph weight='300' size='20px'>Type a username</Paragraph>
      <Paragraph weight='300' size='20px'>and find a profile</Paragraph>
    </Container>
  );
}

export default Text 
