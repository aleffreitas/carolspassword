import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;  
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div`
  height: calc(100vh - 140px);
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
`;

export const GlobalContainer = styled.div`
  width: 425px;
  max-width: 425px;
`;