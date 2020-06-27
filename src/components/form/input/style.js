import styled from 'styled-components';

export const Style = styled.input`
  font-family: 'Franklin Gothic Book', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 12px 48px;
  border: 1px solid;
  border-image-source: linear-gradient(45deg, #8752CC, #5452CC, #6C79CC, #709ED1, #89E5D5, #52A0CC);
  border-image-slice: 1;
  background: #3F3F46;
  color: #89E5D5;
  text-align: center;
  white-space: nowrap; 
  min-width: 340px; 
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: #89E5D555;
  }

  @media screen and (max-width: 500px){
    min-width: 320px;
  }
`;

export default Style
