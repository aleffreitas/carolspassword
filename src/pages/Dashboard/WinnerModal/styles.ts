import styled, { css } from "styled-components";

type EmphasisProps = {
  withPurple?: boolean;
}


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 32px;
  font-weight: bold;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  font-weight: normal;
  font-size: 20px;
`;

export const Emphasis = styled.span<EmphasisProps>`
  ${({ theme, withPurple }) => css`
    color: ${withPurple ? theme.colors.purple : theme.colors.white};
  `}
  font-weight: bold;
  font-size: 20px;
`;