import styled, { css } from 'styled-components';
import { BsPerson } from 'react-icons/bs';

export const CircleButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  z-index: 9999;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Icon = styled(BsPerson)`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `};
  width: 32px;
  height: 32px;
`;