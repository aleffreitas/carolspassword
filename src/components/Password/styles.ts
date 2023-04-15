import styled, { css } from "styled-components";
import { BsLock } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 106px;
  width: 183px;
`;

export const Padlock = styled(BsLock)`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
  width: 56px;
  height: 48px;
`;

export const Bloc = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};    
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  border-radius: 10px;
`;

export const ContentBloc = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.purple};    
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
`;

export const Number = styled.p``;