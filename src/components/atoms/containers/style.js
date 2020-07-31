import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default Flex 
