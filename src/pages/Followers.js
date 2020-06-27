import React from 'react';
import Container from '../components/containers/main/Container';
import Row from '../components/containers/row/Row';
import RowOptions from '../components/containers/rowCenter/Row';
import Title from '../components/texts/titlePage/followers/Title';
import Line from '../components/decoration/line/Line';
import following from '../assets/icons/IconFollowing.svg';
import FollowList from '../components/containers/followList/FollowList';
import Button from '../components/button/Button';
import plus from '../assets/icons/plus.svg';
import searchColor from '../assets/icons/search-color.svg';
import profileColor from '../assets/icons/profile-color.svg';

const Following = () => {
  return(
    <Container>
      <RowOptions>
        <Button border='2px solid #57D9C1' backgroundColor='transparent' fontColor='#57D9C1' backgroundHover='#57D9C1' colorHover='#E7E4FF' src={searchColor} alt='search-icon' iconWidth='11px'>Back to Search</Button>
        <Button border='2px solid #8752CC' backgroundColor='transparent' fontColor='#8752CC' backgroundHover='#8752CC' colorHover='#E7E4FF' src={profileColor} alt='search-icon' iconWidth='11px'>Back to Profile</Button>
      </RowOptions>
       <Row>
        <img width="96px" src={following} alt='Big Following' />
        <img width="66px" src={following} alt='Small Following' />
      </Row>
      <Title text='Followers' />
      <Line /> 
      <FollowList />
      <FollowList />
      <FollowList />
      <Button color='#3F3F46' backgroundColor='#E7E4FF' hoverColor='#A1A0B2' src={plus} alt='plus-icon' iconWidth='16px'>See More</Button>
    </Container>
  );
}

export default Following
