import React from 'react';
import Container from '../components/containers/container/Container';
import Box from '../components/containers/boxInfo/Box';
import Photo from '../components/image/photo/Photo';
import Username from '../components/texts/username/Username';
import Name from '../components/texts/name/Name';
import Line from '../components/line/Line';
import Biography from '../components/texts/biography/Biography';
import Location from '../components/texts/location/Location';
import Company from '../components/texts/company/Company';

export const Profile = () => {
  return(
    <Container>
      <Photo src={'https://avatars1.githubusercontent.com/u/30665365?v=4'} />
      <Username>@aline-borges</Username>
      <Name>Aline Borges</Name>
      <Line />
      <Biography>Computer Science student, web development intern and JavaScript enthusiast.</Biography>
      <Box>
        <Location>Rio de Janeiro, Brazil</Location>
        <Company>FGV</Company>
      </Box>
    </Container>
  );
}

export default Profile 
