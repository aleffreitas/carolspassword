import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 414px;
  height: 100vh;
  overflow: hidden;
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: calc(100vh - 210px);
`;