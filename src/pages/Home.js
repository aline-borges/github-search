import React from 'react';
import Container from '../components/containers/container/Container';
import Logo from '../components/image/logo/Logo';
import Title from '../components/texts/title/Title';
import Subtitle from '../components/texts/subtitle/Subtitle';
import Input from '../components/form/input/Input';
import Button from '../components/button/Button';
import search from '../assets/icons/search.svg'

export const Home = () => {
  return(
    <Container>
      <Logo />
      <Title>Github</Title>
      <Subtitle>Search</Subtitle>
      <Input text='Digite o usuário do Github' />
      <Button backgroundColor='#8752CC' fontColor='#E7E4FF' backgroundHover='#6426B2' src={search} alt='search-icon' iconWidth='11px'>Search</Button>
    </Container>
  );
}

export default Home 
