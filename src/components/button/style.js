import styled from 'styled-components';

export const Style = styled.button`
  font: 400 14px 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  border: none;
  border-radius: 25px;
  padding: 12px 70px;
  background-color: ${props => props.backgroundColor};
  color:  ${props => props.fontColor};
  margin: 30px 0;
  box-shadow: 0px 6px 6px #00000040;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export default Style