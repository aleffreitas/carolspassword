import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OuterCircle = styled.div`
  ${({ theme }) => css`  
    background-color: ${theme.colors.gray400};
    box-shadow: 0px 0px 10px 10px ${theme.colors.purple};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 291px;
  width: 291px;
`;

export const InnerCircle = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray300};  
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-direction: column;
  line-height: 50px;
  height: 213px;
  width: 213px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};  
  `}
  font-size: 32px;
  font-weight: bold;
`;

export const Score = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.purple};  
  `}
  font-size: 64px;
  font-weight: bold;
`;