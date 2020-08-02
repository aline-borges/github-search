import React from 'react';
import Page from '../../components/molecules/page/Page';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/molecules/main/Main';
import Header from '../../components/molecules/header/Header';
import Container from '../../components/atoms/containers/Container';

const Home = (props) => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column'>
        <Header />
        <Page>
          <Figure />
          <Main />
        </Page>
      </Container>
    </>
  );
}

export default Home 

