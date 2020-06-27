import styled from 'styled-components';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GridCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-itemns: center;

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Main = styled(Col)`
  min-width: 100vw;
  min-height: 100vh;
  background: #3F3F46;
  text-align: center;
  overflow: hidden;
`;

export const ColumnStart = styled(Col)`
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2px;
`;

export const ColumnLeft = styled(Col)`
  justify-content: left;
  align-items: left;
  margin: 15px;
`;

export const RowStart = styled(Row)`
  justify-content: flex-start;
  align-items: center;
`;

export const RowCenter= styled(Row)`
  justify-content: space-around;
  align-items: center;
`;

export default Main 
