import React from 'react';
import Container from '../components/containers/container/Container';
import Row from '../components/containers/row/Row';
import Title from '../components/texts/titlePage/repository/Title';
import bigCode from '../assets/icons/codeIdea.svg';
import smallCode from '../assets/icons/codeIdeaSm.svg';
import Line from '../components/decoration/line/Line';
import List from '../components/repositoryList/list/List';
import Item from '../components/repositoryList/item/itemRepository/Item';
import Arrow from '../components/decoration/arrow/Arrow';
import arrow from '../assets/icons/arrow-repo.svg';
import Button from '../components/button/repository/Button';

export const Repository = () => {
  return(
    <Container>
      <Row>
        <img width="96px" src={bigCode} alt='Big Code' />
        <img width="66px" src={smallCode} alt='Small Code' />
      </Row>
      <Title text='Repositories' />
      <Line /> 
      <List>
        <Arrow src={arrow} />
        <Item text='First-Repository' />
        <Item text='Second-Repository' />
        <Item text='Third-Repository' />
        <Item text='Fourth-Repository' />
        <Item text='Fifth-Repository' />
      </List>
      <Button>See More</Button>
    </Container>
  );
}

export default Repository 
