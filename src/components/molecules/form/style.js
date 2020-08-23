import styled from 'styled-components';

import Input from '../../atoms/inputs/Input';

export const StyledInput = styled(Input)`
  margin: 15px 0 0 95px;
  border-color: #8752CC;
  color: #8752CC;
  outline: none;

  ::placeholder {
    color: #8752CC;
    opacity: 50%;
  }
`;