import styled from "styled-components";
import { css } from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-top: -4rem;
`;

export const ContentQuestion = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 26px;
    font-weight: bold;
  `}
`;

export const NumberQuestion = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: 26px;
    font-weight: bold;
  `}
`;

export const BoxValueQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ValueQuestion = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: 18px;
    font-weight: bold;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 12px;
    font-weight: bold;
  `}
`;
