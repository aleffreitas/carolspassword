import styled, { css } from "styled-components";

type IconProps = {
  icon: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  font-size: 32px;
`;

export const Icon = styled.div<IconProps>`
  ${({ theme, icon }) => css`
    color: ${icon === 'wrong' ? theme.colors.red : theme.colors.green};
  `}
  font-size: 100px;
  margin-bottom: -3rem;
`;