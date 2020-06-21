import React from 'react';
import Info from '../info/Info';
import map from '../../../assets/icons/place.svg';

export const Location = (props) => {
  return(
    <Info src={map}>
      {props.children}
    </Info>
  );
}

export default Location 
