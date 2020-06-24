import React from 'react';
import Container from '../components/containers/container/Container';
import Row from '../components/containers/row/Row';
import Title from '../components/texts/titlePage/star/Title';
import bigStar from '../assets/icons/Star-big.svg';
import smallStar from '../assets/icons/Star-sm.svg';
import Line from '../components/decoration/line/Line';
import List from '../components/repositoryList/list/List';
import Item from '../components/repositoryList/item/itemStar/Item';
import Arrow from '../components/decoration/arrow/Arrow';
import arrow from '../assets/icons/arrow-stars.svg';
import Button from '../components/button/Button';
import plus from '../assets/icons/plus.svg';

export const Star = () => {
  return(
    <Container>
      <Row>
        <img width="96px" src={bigStar} alt='Big Star' />
        <img width="66px" src={smallStar} alt='Small Star' />
      </Row>
      <Title text='Stars' />
      <Line /> 
      <List>
        <Arrow src={arrow} />
        <Item text='First-Repository' />
        <Item text='Second-Repository' />
        <Item text='Third-Repository' />
        <Item text='Fourth-Repository' />
        <Item text='Fifth-Repository' />
      </List>
      <Button fontcolor='#E7E4FF' backgroundColor='#8752CC' hoverColor='#6426B2' src={plus} alt='plus-icon' iconWidth='16px'>See More</Button>
    </Container>
  );
}

export default Star 
