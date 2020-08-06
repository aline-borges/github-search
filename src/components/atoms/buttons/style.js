import styled from 'styled-components';

export const Style = styled.button`
  margin: ${props => props.margin};
  border: none;
  padding: 8px 48px;
  min-width: auto;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  box-shadow: 0px 4.08009px 4.08009px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font: bold 12px 'Open Sans';
  letter-spacing: 0.04em;
  line-height: 21px;
  text-transform: uppercase;
  cursor: pointer;

    &:hover {
      background-color: ${props => props.bgHover};
      color: ${props => props.colorHover};
    }
`;

export default Style 
