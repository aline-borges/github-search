import React from 'react';
import InputStyle from './style';

const Input = (props) => {
  return(
    <InputStyle margin={props.margin}
                borderColor={props.borderColor} 
                color={props.color} 
                opacity={props.opacity} 
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor} />
  );
}

export default Input 