import React from 'react';
import Image from '../../atoms/images/Image';

const Figure = (props) => {
  return(
    <Image width={props.width} src={props.src} alt={props.alt} margin={props.margin} />
  );
}

export default Figure 
