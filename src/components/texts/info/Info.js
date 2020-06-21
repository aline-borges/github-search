import React from 'react';
import Style from './style';
import Row from '../../containers/row/Row';
import Icon from '../../image/iconInfo/Icon';

export const Info = (props) => {
  return(
    <Style>
      <Row>
        <Icon src={props.src} />
        {props.children}
      </Row>
    </Style>
  );
}

export default Info 
 