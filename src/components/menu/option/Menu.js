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

export const Menu = () => {
  return(
  <Grid>
    <Style>
      <Column>
        Repositories
        <Row>
          <Icon src={code} />
          13
        </Row>
      </Column>
    </Style>
    <Style>
      <Column>
        Stars
        <Row>
          <Icon src={star} />
          5
        </Row>
      </Column>
    </Style>
    <Style>
      <Column>
        Following
        <Row>
          <Icon src={following} />
          1
        </Row>
      </Column>
    </Style>
    <Style>
      <Column>
        Followers
        <Row>
        <Icon src={followers} />
        1
        </Row>
      </Column>
    </Style>
  </Grid>
  );
}

export default Menu  
