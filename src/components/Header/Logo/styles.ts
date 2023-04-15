import styled, { css } from "styled-components";

interface ContainerProps {
  size: number;
};

export const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    font-size: ${size}px;
    font-weight: bold;
    line-height: 30px;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
`;