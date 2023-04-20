import styled, { css } from "styled-components";

type ContainerProps = {
  scale?: number;
};

export const Container = styled.div<ContainerProps>`
  ${({ scale }) => css`
    transform: scale(${scale});
  `}
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
  height: 210px;
  width: 210px;
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
  height: 130px;
  width: 130px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  line-height: 30px;
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};  
  `}
  font-size: 20px;
  font-weight: bold;
`;

export const Score = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.purple};  
  `}
  font-size: 40px;
  font-weight: bold;
`;