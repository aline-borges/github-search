import React, { Component } from 'react';
import api from '../services/api';
import Container from '../components/containers/main/Container';
import Row from '../components/containers/row/Row';
import RowOptions from '../components/containers/rowCenter/Row';
import Title from '../components/texts/titlePage/repository/Title';
import bigCode from '../assets/icons/codeIdea.svg';
import smallCode from '../assets/icons/codeIdeaSm.svg';
import Line from '../components/decoration/line/Line';
import List from '../components/repositoryList/list/List';
import Item from '../components/repositoryList/item/itemRepository/Item';
import Button from '../components/button/Button';
import plus from '../assets/icons/plus.svg';
import searchColor from '../assets/icons/search-color.svg';
import profileColor from '../assets/icons/profile-color.svg';

export default class Repository extends Component {
  render() {
    return(
      <Container>
        <RowOptions>
          <Button border='2px solid #57D9C1' backgroundColor='transparent' fontColor='#57D9C1' backgroundHover='#57D9C1' colorHover='#E7E4FF' src={searchColor} alt='search-icon' iconWidth='11px'>Back to Search</Button>
          <Button border='2px solid #8752CC' backgroundColor='transparent' fontColor='#8752CC' backgroundHover='#8752CC' colorHover='#E7E4FF' src={profileColor} alt='search-icon' iconWidth='11px'>Back to Profile</Button>
        </RowOptions>
        <Row>
          <img width="96px" src={bigCode} alt='Big Code' />
          <img width="66px" src={smallCode} alt='Small Code' />
        </Row>
        <Title text='Repositories' />
        <Line /> 
        <List>
          <Item />
        </List>
        <Button color='#3F3F46' backgroundColor='#57D9C1' hoverColor='#32cfb1' src={plus} alt='plus-icon' iconWidth='16px'>See More</Button>
      </Container>
    );
  }
}
