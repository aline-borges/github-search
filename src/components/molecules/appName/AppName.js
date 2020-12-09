import React from 'react';
import Container from '../../atoms/containers/container/Container';
import Title from '../../atoms/texts/Title';
import Subtitle from '../../../components/atoms/texts/Subtitle';

const AppName = () => {
  return(
    <Container direction='row' align='center' margin='0 16rem 0 0'>
      <Title>GitHub</Title>
      <Subtitle>Search</Subtitle>
    </Container>
  );
}

export default AppName 
