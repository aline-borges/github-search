import React from 'react';
import InputStyle from './style';

const Input = (props) => {
  return (
    <InputStyle onChange={props.onChange}
                error={props.error}
                className={props.className}
                type='text'
                placeholder='Enter a user name' />
  );
}

export default Input 
