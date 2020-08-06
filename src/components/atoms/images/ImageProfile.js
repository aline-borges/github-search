import React from 'react';
import { Image } from './style';

const ImageProfile = (props) => {
  return(
    <Image src={props.src} alt={props.alt} width={props.width} margin={props.margin} />
  );
}

export default ImageProfile 
