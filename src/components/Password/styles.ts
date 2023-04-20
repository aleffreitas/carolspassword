import styled, { css } from "styled-components";

type PadlockProps = {
  score: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 80px;
  width: 130px;
`;

export const Padlock = styled.div<PadlockProps>`
  ${({ theme, score }) => css`
    color: ${theme.colors.purple};
    margin-left: ${score === 100 ? '15px' : 0};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 35px;
`;

export const Bloc = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};    
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 10px;
`;

export const ContentBloc = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.purple};    
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;

export const Number = styled.p``;