import React from 'react';
import Header from '../../components/organisms/header/Header';
import Container from '../../components/atoms/containers/container/Container';
import Content from '../../components/atoms/containers/content/Content';
import Info from '../../components/molecules/infoUser/Info';
import Repository from '../../components/molecules/infoUser/Repository';

const Template = ({ data }) => {
  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0">
        <Container direction='column'>
          <Info data={data} />
          <Repository />
        </Container>
      </Content>
    </Container>
  )
}

export default Template 
