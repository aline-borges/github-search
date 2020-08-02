import React from 'react';
import { PageTitleStyle } from './style';

const PageTitle = (props) => {
  return(
    <PageTitleStyle color={props.color}>
      {props.children}
    </PageTitleStyle>
  );
}

export default PageTitle 
