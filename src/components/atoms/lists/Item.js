import React from 'react';
import { ItemList } from './style';

const Item = (props) => {
  return(
    <ItemList target={props.target}>
      {props.children}
    </ItemList>
  );
}

export default Item
 