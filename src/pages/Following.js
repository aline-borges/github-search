import React from 'react';
import Container from '../components/containers/container/Container';
import Row from '../components/containers/row/Row';
import Title from '../components/texts/titlePage/followers/Title';
import Line from '../components/decoration/line/Line';
import following from '../assets/icons/IconFollowing.svg';
import FollowList from '../components/containers/followList/FollowList';
import Button from '../components/button/Button';
import plus from '../assets/icons/plus.svg';

const Following = () => {
  return(
    <Container>
       <Row>
        <img width="96px" src={following} alt='Big Following' />
        <img width="66px" src={following} alt='Small Following' />
      </Row>
      <Title text='Following' />
      <Line /> 
      <FollowList />
      <FollowList />
      <FollowList />
      <Button color='#3F3F46' backgroundColor='#E7E4FF' hoverColor='#A1A0B2' src={plus} alt='plus-icon' iconWidth='16px'>See More</Button>
    </Container>
  );
}

export default Following
