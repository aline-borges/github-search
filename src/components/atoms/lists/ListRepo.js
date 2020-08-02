import React from 'react';
import { ListRepos } from './style';

const ListRepo = (props) => {
  return(
    <ListRepos>
      {props.children}
    </ListRepos>
  );
}

export default ListRepo 
