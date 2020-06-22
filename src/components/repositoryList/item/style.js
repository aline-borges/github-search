import styled from 'styled-components';

export const Style = styled.li`
  margin: 15px;
  letter-spacing: 1px;
  cursor: pointer;

  &:first-of-type {
    color: ${props => props.fontColor};
  }
`;

export default Style 
