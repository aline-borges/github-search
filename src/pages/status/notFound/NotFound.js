import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import notFound from '../../../assets/images/404.png';
import Paragraph from '../../../components/atoms/texts/Paragraph';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="60px 0 0 0" justify='center' align='center'>
        <Main>
          <Paragraph weight="800" size="24px" spacing="0.03em">Ooops! Page not found.</Paragraph>
          <Figure width='600px' src={notFound} alt='notFound' />
          <Paragraph weight="500" size="18px" spacing="0.03em">Look like you’re lost in space.</Paragraph>
          <Paragraph weight="500" size="18px" spacing="0.03em">If you want to start over, <Link to="/"><span>go to the homepage.</span></Link></Paragraph>
        </Main>
      </Content>
    </Container>
  );
}

export default NotFound 
