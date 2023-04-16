import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

type TextFooterProps = {
  withPurple?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 380px;
  text-align: center;
`;

export const TextFooter = styled.span<TextFooterProps>`
  ${({ theme, withPurple }) => css`
    color: ${withPurple ? theme.colors.purple : theme.colors.white};
  `}
  font-size: 14px;
  font-weight: bold;
`;

export const IconLoading = styled.img`
  width: 73px;
  height: 73px;
  animation: ${rotate} 1.3s linear infinite;
`;