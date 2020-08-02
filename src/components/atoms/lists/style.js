import styled from 'styled-components';

export const ListRepos = styled.ul`
  font: 600 14px 'Open Sans', sans-serif;
  margin: 15px auto;
  text-transform: uppercase;
  color: ${props => props.color};
`;

export const ItemList = styled.li`
  position: relative;
  margin: 15px 0;
  cursor: pointer;

  &:hover:before {
    content: "→";
    position: absolute;
    top: -1px;
    left: -20px;
    width: 0;
    height: 5px;
    transition: width .2s ease;
  }
  
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
  }
  
  &:hover:before,
  &:hover:after {
    width: 100%;
    color: ${props => props.arrow};
  }

  &:hover {
    color: ${props => props.target};
  }
`;