import React from 'react';
import Container from '../../atoms/containers/container/Container';
import Paragraph from '../../atoms/texts/Paragraph';

const Information = (props) => {
  return(
    <Container direction='column' justify='left' margin='0 0 15px'>
      <Paragraph weight='900' size='24px'>{props.title}</Paragraph>
      <Paragraph weight='300' size='20px'>{props.subtitle}</Paragraph>
      <Paragraph weight='300' size='20px'>{props.text}</Paragraph>
    </Container>
  );
}

export default Information 
