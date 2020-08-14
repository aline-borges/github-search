import React from 'react';
import Content from '../../components/atoms/containers/content/Content';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/atoms/containers/main/Main';
import Header from '../../components/molecules/header/Header';
import Container from '../../components/atoms/containers/container/Container';
import home from '../../assets/images/home.png';
import Information from '../../components/molecules/information/Information';
import Form from '../../components/molecules/form/Form';

const Home = (props) => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column'>
        <Header />
        <Content margin="100px 0 0 0">
          <Figure width='400px' src={home} alt='home' />
          <Main>
            <Information />
            <Form />
          </Main>
        </Content>
      </Container>
    </>
  );
}

export default Home 

