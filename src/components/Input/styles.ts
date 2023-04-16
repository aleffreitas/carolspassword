import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
`;

export const TitleInput = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: 18px;
    font-weight: regular;
  `}
`;

export const InputStyled = styled.input`
  ${({ theme }) => css`
    border: none;
    border-bottom: 2px solid ${theme.colors.purple};
    color: ${theme.colors.white};
  `}
  background-color: transparent;
  height: 35px;

  &:focus{
    outline: none;
  }
`;