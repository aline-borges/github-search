import React from 'react';
import Container from '../components/containers/container/Container';
import Logo from '../components/image/logo/Logo';
import Title from '../components/texts/title/Title';
import Subtitle from '../components/texts/subtitle/Subtitle';
import Input from '../components/form/input/Input';
import Button from '../components/button/search/Button';

export const Home = () => {
  return(
    <Container>
      <Logo />
      <Title>Github</Title>
      <Subtitle>Search</Subtitle>
      <Input text='Digite o usuário do Github' />
      <Button>Search</Button>
    </Container>
  );
}

export default Home 
