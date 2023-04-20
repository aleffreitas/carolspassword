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
  font-size: 26px;
  font-weight: bold;
`;

export const ContainerAvatar = styled.div`
  height: 160px;
  width: 70%;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  font-weight: normal;
  font-size: 16px;
  margin-top: -1.5rem;
`;

export const Emphasis = styled.span<EmphasisProps>`
  ${({ theme, withPurple }) => css`
    color: ${withPurple ? theme.colors.purple : theme.colors.white};
  `}
  font-weight: bold;
  font-size: 16px;
`;