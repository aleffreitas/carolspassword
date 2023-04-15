import styled, { css } from "styled-components";

export const ButtonAction = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
    color: ${theme.colors.white};  
  `}
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  border: none;
  height: 68px;
  width: 100%;
`;