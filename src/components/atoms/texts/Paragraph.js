import React from 'react';
import TextParagraph from './style';

const Paragraph = (props) => {
  return(
    <TextParagraph weight={props.weight} size={props.size} spacing={props.spacing} color={props.color} transform={props.transform} margin={props.margin} width={props.width}>
      {props.children}
    </TextParagraph>
  );
}

export default Paragraph 
