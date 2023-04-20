import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  /* max-width: 414px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
`;

// export const GlobalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 2rem;
// `;