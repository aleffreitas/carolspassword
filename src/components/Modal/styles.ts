import styled, { css } from 'styled-components';
import { Overlay as RadixOverlay, Content as RadixContent } from '@radix-ui/react-dialog';

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
`;

export const Content = styled(RadixContent)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray900};
  `};
  width: 351px;   
  padding: 32px;
  border-radius: 10px;
  box-sizing: border-box;
`;