import React from 'react';
import { SiteTitle } from './style';

const Title = (props) => {
  return(
    <SiteTitle>
      {props.children}
    </SiteTitle>
  );
}

export default Title 
