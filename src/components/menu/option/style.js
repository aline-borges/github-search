import styled from 'styled-components';

export const Style = styled.button`
  font: 14px 'Montserrat', sans-serif;
  border: 1px solid;
  border-image-source: linear-gradient(45deg, #8752CC, #5452CC, #6C79CC, #709ED1, #89E5D5, #52A0CC);
  border-image-slice: 1;
  background: #3F3F46;
  color: #E7E4FF;
  min-width: 130px;
  min-height: 130px;
  padding: 15px;
  margin: 15px;

  &:hover {
    border: 3px solid;
    border-image-source: linear-gradient(45deg, #8752CC, #5452CC, #6C79CC, #709ED1, #89E5D5, #52A0CC);
    border-image-slice: 1;
    cursor: pointer;
  }

  @media screen and (max-width: 600px){
    min-width: 160px;
    min-height: 160px;
    font-size: 16px;
  }
`;

export default Style 
