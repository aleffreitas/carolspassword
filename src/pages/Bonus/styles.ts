import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.purple};
    background-color: ${theme.colors.gray200};
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  margin-left: 1rem;
`;

export const TitleCard = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 32px;
  font-weight: normal;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 32px;
  font-weight: normal;
`;