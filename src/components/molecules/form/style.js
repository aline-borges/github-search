import styled from 'styled-components';

import Input from '../../atoms/inputs/Input';
import Container from '../../atoms/containers/container/Container';

export const InputContainer = styled(Container)`
  display: flex;
  flex-direcion: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  min-width: 15px;
  margin: 10px 30px 0 0;
`;

export const Message = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  margin: 2px 0 0 50px;
  color: ${props => 
  props.warning
  ? "#F2FF5B"
  : props.success 
  ? "#49B253" 
  : props.error 
  ? "#FF5B5B" 
  : "#8752CC"};
`;

export const StyledInput = styled(Input)`
  margin: 15px 0 0 95px;
  border-color: ${props => 
  props.warning
  ? "#F2FF5B"
  : props.success 
  ? "#49B253" 
  : props.error 
  ? "#FF5B5B" 
  : "#8752CC"};

  color: ${props => 
  props.warning
  ? "#F2FF5B"
  : props.success 
  ? "#49B253" 
  : props.error 
  ? "#FF5B5B" 
  : "#8752CC"};

  outline: none;

  ::placeholder {
    color:  ${props => 
  props.warning
  ? "#F2FF5B"
  : props.success 
  ? "#49B253" 
  : props.error 
  ? "#FF5B5B" 
  : "#8752CC"};
  
    opacity: 50%;
  }
`;