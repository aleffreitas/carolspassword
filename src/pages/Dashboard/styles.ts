import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 555px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const BonusButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  background: none;
  border: none;
  font-size: 32px;
  font-weight: normal;
`;