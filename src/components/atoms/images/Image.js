import React from 'react';
import MainImage from './style';

const Image = (props) => {
  return(
    <MainImage width={props.width} src={props.src} alt={props.alt} margin={props.margin} />
  );
}

export default Image 
