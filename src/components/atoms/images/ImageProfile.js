import React from 'react';
import { Image } from './style';

const ImageProfile = (props) => {
  return(
    <Image src={props.src} alt={props.alt} />
  );
}

export default ImageProfile 
