import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import unavailable from '../../../assets/images/503.png';
import Paragraph from '../../../components/atoms/texts/Paragraph';
import { Link } from 'react-router-dom';

const Unavailable = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0" justify='center' align='center'>
        <Main>
          <Paragraph weight="800" size="24px" spacing="0.03em">Sorry, the service is unavailable.</Paragraph>
          <Figure width='600px' src={unavailable} alt='unavailable' />
          <Paragraph weight="500" size="18px" spacing="0.03em">The server is currently unable to handle your request.</Paragraph>
          <Paragraph weight="500" size="18px" spacing="0.03em">If you want to start over, <Link to="/"><span>go to the homepage.</span></Link></Paragraph>
        </Main>
      </Content>
    </Container>
  );
}

export default Unavailable 
