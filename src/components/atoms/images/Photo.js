import React from 'react';
import { Image } from './style';

const Photo = (props) => {
  return(
    <Image src={props.src} alt={props.alt} width={props.width} margin={props.margin} />
  );
}

export default Photo 
