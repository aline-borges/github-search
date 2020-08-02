import React from 'react';
import Header from '../../components/molecules/header/Header';
import Page from '../../components/molecules/page/Page';
import Info from '../../components/molecules/infoUser/Info';
import Repository from '../../components/molecules/infoUser/Repository';
import Container from '../../components/atoms/containers/Container';

const Profile = () => {
  return(
    <>
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Page>
        <Container direction='column'>
          <Info />
          <Repository />
        </Container>
      </Page>
    </Container>
    </>
  );
}

export default Profile 
