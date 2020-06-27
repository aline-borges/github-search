import React from 'react'
import Main from '../style';

const Container = (props) => {
  return(
    <Main>
      {props.children}
    </Main>
  );
}

export default Container