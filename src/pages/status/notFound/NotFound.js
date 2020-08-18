import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import Information from '../../../components/molecules/information/Information';
import notFound from '../../../assets/images/404.png';

const NotFound = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="140px 0 0 0" justify='center' align='center'>
        <Main>
          <Information title='Ooops! Page not found.' subtitle='Look like you’re lost in space.' text='If you want to start over, go to the homepage.' />
        </Main>
        <Figure width='' src={notFound} alt='notFound' />
        </Content>
    </Container>
  );
}

export default NotFound 
