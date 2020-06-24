import React from 'react';
import Style from './style';
import Photo from '../../../components/image/photo/Photo';
import Username from '../../../components/texts/username/Username';
import NameList from '../../../components/texts/nameList/NameList';
import Biography from '../../../components/texts/biography/Biography';
import Row from '../../../components/containers/row/Row';
import Location from '../../../components/texts/location/Location';
import Company from '../../../components/texts/company/Company';

const FollowList = () => {
  return(
    <Row>
      <Photo src={'https://avatars1.githubusercontent.com/u/30665365?v=4'} />
      <Style>
        <Row>
          <NameList>Aline Borges</NameList>
          <Username>@aline-borges</Username>
        </Row>
        <Biography>Computer Science student, web development intern and JavaScript enthusiast.</Biography>
        <Row>
          <Location>Rio de Janeiro, Brazil</Location>
          <Company>FGV</Company>
        </Row>
      </Style>
    </Row>
  );
}

export default FollowList 


