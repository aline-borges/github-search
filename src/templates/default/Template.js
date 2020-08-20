import React from 'react';
import Header from '../../components/organisms/header/Header';
import Container from '../../components/atoms/containers/container/Container';
import Content from '../../components/atoms/containers/content/Content';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/atoms/containers/main/Main';

const Template = (props) => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
    <Header />
    <Content margin="140px 0 0 0">
      <Figure width={props.figureWidth} src={props.figureSrc} alt={props.figureAlt} />
      <Main>
        {props.children}
      </Main>
    </Content>
  </Container>
  )
}

export default Template 
