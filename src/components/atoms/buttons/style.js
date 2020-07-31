import styled from 'styled-components';

export const Style = styled.button`
  margin: ${props => props.margin};
  border: none;
  padding: 8px 16px;
  min-width: 200px;
  background-color: ${props => props.bgColor};
  color: #F9F3F3;
  box-shadow: 0px 4.08009px 4.08009px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font: 800 12px 'Open Sans';
  line-height: 21px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

    &:hover {
      background-color: ${props => props.bgHover}
    }
`;

export default Style 
