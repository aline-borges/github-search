import React from 'react';
import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';
import Title from '../components/texts/title/Title';
import Subtitle from '../components/texts/subtitle/Subtitle';
import Input from '../components/form/input/Input';
import Button from '../components/button/Search/Button';

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
