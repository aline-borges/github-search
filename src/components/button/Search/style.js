import styled from 'styled-components';

export const Style = styled.button`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border: none;
  border-radius: 25px;
  padding: 12px 70px;
  background: #8752CC;
  color: #E7E4FF;
  margin: 20px 0;
  box-shadow: 0px 6px 6px #00000040;
  cursor: pointer;

  &:hover {
    background: #6426B2;
  }
`;

export default Style