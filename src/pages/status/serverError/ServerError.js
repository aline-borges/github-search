import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import Information from '../../../components/molecules/information/Information';
import serverError from '../../../assets//images/500.png';

const ServerError = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="140px 0 0 0" justify='center' align='center'>
        <Main>
          <Information title='Oooh no! :(' subtitle='Try reloading the page. We’re working hard to fix the page for you  as soon as possible' text='If you want to start over, go to the homepage.' />
        </Main>
        <Figure width='700px' src={serverError} alt='serverError' />
        </Content>
    </Container>
  );
}

export default ServerError 
