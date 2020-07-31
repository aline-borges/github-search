import styled from 'styled-components';

export const InputStyle = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid;
  background-color: transparent;
  min-width: 250px;
  margin: ${props => props.margin};
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  border-color: ${props => props.borderColor};
  color: ${props => props.color};

  ::placeholder {
    color: ${props => props.placeholderTextColor};
    opacity: ${props => props.opacity};
  }
`;

export default InputStyle 
