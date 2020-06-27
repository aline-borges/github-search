import React from 'react';
import Style from './style';
import Column from '../../../components/containers/column/Column';
import Row from '../../../components/containers/row/Row';
import Grid from '../../../components/containers/grid/Grid';
import Icon from '../../../components/image/iconMenu/Icon';
import code from '../../../assets/icons/code.svg';
import star from '../../../assets/icons/star.svg';
import following from '../../../assets/icons/following.svg';
import followers from '../../../assets/icons/followers.svg';
import Paragraph from '../../texts/paragraph/Paragraph';

export const Menu = () => {
  return(
  <Grid>
    <Style>
      <Column>
        <Paragraph>
          Repositories
        </Paragraph>
        <Row>
          <Icon src={code} />
          <Paragraph>
            13
          </Paragraph>
        </Row>
      </Column>
    </Style>
    <Style>
      <Column>
        <Paragraph>
          Stars
        </Paragraph>
        <Row>
          <Icon src={star} />
          <Paragraph>
            5
          </Paragraph>
        </Row>
      </Column>
    </Style>
    <Style>
      <Column>
        <Paragraph>
          Following
        </Paragraph>
        <Row>
          <Icon src={following} />
          <Paragraph>
            1
          </Paragraph>
        </Row>
      </Column>
    </Style>
    <Style>
      <Column>
        <Paragraph>
          Followers
        </Paragraph>
        <Row>
        <Icon src={followers} />
        <Paragraph>
          1
        </Paragraph>
        </Row>
      </Column>
    </Style>
  </Grid>
  );
}

export default Menu  
