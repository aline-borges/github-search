import styled from 'styled-components';

export const SiteTitle = styled.h1`
  font: 500 24px 'Roboto', sans-serif;
  line-height: 52px;
  letter-spacing: 1px;
  color: #F9F3F3;
  margin-right: 10px;
`;

export const SubTitle = styled.h1`
  font: 700 12px 'Open Sans', sans-serif;
  letter-spacing: 5px;
  color: #8752CC;
  text-transform: uppercase;
`;

export const TextParagraph = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  letter-spacing: ${props => props.spacing};
  color: ${props => props.color};
  text-transform: ${props => props.transform};
  margin: ${props => props.margin};
  min-width: ${props => props.width};
`;

export default TextParagraph 
