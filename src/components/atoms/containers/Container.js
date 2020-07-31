import React from 'react';
import Flex from '../containers/style';

const Container = (props) => {
  return(
    <Flex direction={props.direction}
          justify={props.justify}
          align={props.align}
          margin={props.margin}
          padding={props.padding}>
      {props.children}
    </Flex>
  );
}

export default Container 
