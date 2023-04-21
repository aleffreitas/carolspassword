import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

export const IconLoading = styled.img`
  width: 60px;
  height: 60px;
  animation: ${rotate} 1.3s linear infinite;
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  font-size: 28px;
  font-weight: normal;
`;