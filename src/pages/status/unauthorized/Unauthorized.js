import React from 'react';
import Container from '../../../components/atoms/containers/container/Container';
import Content from '../../../components/atoms/containers/content/Content';
import Main from '../../../components/atoms/containers/main/Main';
import Header from '../../../components/organisms/header/Header';
import Figure from '../../../components/molecules/figure/Figure';
import unauthorized from '../../../assets/images/401.png';
import Paragraph from '../../../components/atoms/texts/Paragraph';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0" justify='center' align='center'>
        <Main>
          <Paragraph weight="800" size="32px" spacing="0.03em">I’m gonna stop you right there!</Paragraph>
          <Figure width='900px' src={unauthorized} alt='unauthorized' />
          <Paragraph weight="500" size="24px" spacing="0.03em">Unauthorized: Acess to this resource is denied.</Paragraph>
          <Paragraph weight="500" size="24px" spacing="0.03em">If you want to start over, <Link to="/"><span>go to the homepage.</span></Link></Paragraph>
        </Main>
      </Content>
    </Container>
  );
}

export default Unauthorized 
