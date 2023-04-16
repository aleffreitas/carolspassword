import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export const ContentPerson = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray300};
  `}
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const PersonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DataPersonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1rem;
    font-weight: bold;
  `}
`;

export const Email = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: 10px;
    font-weight: bold;
  `}
`;

export const ScoreBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Score = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: 26px;
    font-weight: bold;
  `}
`;
export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 14px;
    font-weight: bold;
  `}
`;