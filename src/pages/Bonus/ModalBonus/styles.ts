import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 30px;
  font-weight: bold;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  font-size: 24px;
  font-weight: normal;
`;

export const Emphasis = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 24px;
  font-weight: bold;
`;