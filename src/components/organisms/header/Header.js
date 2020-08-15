import React from 'react';
import Container from '../../atoms/containers/container/Container';
import Logo from '../../atoms/images/Logo';
import AppName from '../../molecules/appName/AppName';

const Header = () => {
  return(
    <Container direction='row' justify='space-between' align='center' margin='15px 0 0'>
      <Logo margin='0 0 0 140px' alt='logo' width='36px' />
      <AppName />
    </Container>
  );
}

export default Header
