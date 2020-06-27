import styled from 'styled-components';

export const Style = styled.button`
  font: 700 14px 'Roboto Mono', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  border: ${props => props.border || 'none'};
  border-radius: 25px;
  padding: 12px 70px;
  background-color: ${props => props.backgroundColor};
  color:  ${props => props.fontColor};
  margin: 30px 70px;
  box-shadow: 0px 5px 5px #00000040;
  cursor: pointer;
  min-width: 225px;

  &:hover {
    background-color: ${props => props.backgroundHover};
    color: ${props => props.colorHover}
  }

  @media screen and (max-width: 500px){
    font-size: 12px;
    min-width: 300px;
  }
`;

export default Style