import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import gateway from '../../../assets/images/504.png';
import Paragraph from '../../../components/atoms/texts/Paragraph';
import { Link } from 'react-router-dom';

const Gateway = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0" justify='center' align='center'>
        <Main>
          <Paragraph weight="800" size="24px" spacing="0.03em">This page is taking way too long to load.</Paragraph>
          <Figure width='500px' src={gateway} alt='gateway' />
          <Paragraph weight="500" size="18px" spacing="0.03em">Sorry about that. Please try refreshing and contact us if the problem persists.</Paragraph>
          <Paragraph weight="500" size="18px" spacing="0.03em">If you want to start over, <Link to="/"><span>go to the homepage.</span></Link></Paragraph>
        </Main>
      </Content>
    </Container>
  );
}

export default Gateway 
