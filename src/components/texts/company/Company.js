import React from 'react';
import Info from '../info/Info';
import suitcase from '../../../assets/icons/job.svg';

export const Company = (props) => {
  return(
    <Info src={suitcase}>
      {props.children}
    </Info>
  );
}

export default Company 
