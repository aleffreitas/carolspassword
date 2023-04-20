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
  margin-top: 1rem;
  width: 280px;
  height: 250px;
`;

export const TitleCard = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 24px;
  font-weight: normal;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  font-size: 26px;
  font-weight: normal;
`;

export const ContainerAvatar = styled.div`
  height: 220px;
  width: 100%;
`;