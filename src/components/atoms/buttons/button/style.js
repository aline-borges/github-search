import styled from 'styled-components';

export const Style = styled.button`
  margin: ${props => props.margin};
  border: none;
  padding: ${props => props.padding || '8px 48px'};
  min-width: ${props => props.width};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  box-shadow: 0px 4.08009px 4.08009px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: ${props => props.size || '12px'};
  font-weight: bold;
  letter-spacing: 0.04em;
  line-height: ${props => props.lineHeight || '21px'};
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

    &:hover {
      background-color: ${props => props.bgHover};
      color: ${props => props.colorHover};
    }
`;

export default Style 
