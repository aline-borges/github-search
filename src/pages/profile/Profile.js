import React from 'react';
import Header from '../../components/organisms/header/Header';
import Content from '../../components/atoms/containers/content/Content';
import Info from '../../components/molecules/infoUser/Info';
import Repository from '../../components/molecules/infoUser/Repository';
import Container from '../../components/atoms/containers/container/Container';

const Profile = () => {
  return(
    <>
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0">
        <Container direction='column'>
          <Info />
          <Repository />
        </Container>
      </Content>
    </Container>
    </>
  );
}

export default Profile 
