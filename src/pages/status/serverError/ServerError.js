import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import serverError from '../../../assets/images/500.png';
import Paragraph from '../../../components/atoms/texts/Paragraph';
import { Link } from 'react-router-dom';

const ServerError = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0" justify='center' align='center'>
        <Main>
          <Paragraph weight="800" size="24px" spacing="0.03em">Sorry, it’s me, not you..</Paragraph>
          <Figure width='500px' src={serverError} alt='serverError' />
          <Paragraph weight="500" size="18px" spacing="0.03em">Try reloading the page. We’re working hard to fix the page for you as soon as possible.</Paragraph>
          <Paragraph weight="500" size="18px" spacing="0.03em">If you want to start over, <Link to="/"><span>go to the homepage.</span></Link></Paragraph>
        </Main>
      </Content>
    </Container>
  );
}

export default ServerError 
