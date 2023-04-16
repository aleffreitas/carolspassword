import styled, { css } from 'styled-components';
import { Overlay as RadixOverlay, Content as RadixContent } from '@radix-ui/react-dialog';
import { BsXLg } from 'react-icons/bs';

export const Overlay = styled(RadixOverlay)`
  background: rgba(0, 0, 0, 0.92);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  z-index: 999;
`;

export const Content = styled(RadixContent)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray900};
  `};
  width: 351px;   
  padding: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  background: none;
  right: 1rem;
  top: 1rem;
`;

export const Icon = styled(BsXLg)`
  ${({ theme }) => css`
    color: ${theme.colors.purple};  
    font-size: 22px;
  `}
`;