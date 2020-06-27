import React from 'react';
import Style from '../style';

const Paragraph = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Paragraph   
