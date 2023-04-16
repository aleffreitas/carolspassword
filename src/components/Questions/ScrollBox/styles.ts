import styled from 'styled-components';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { css } from 'styled-components';


export const Root = styled(ScrollArea.Root)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};  
  `}
  margin-top: 0.5rem;
  width: 100%;
  height: 450px;
  border-radius: 4px;
  overflow: hidden;
  --scrollbar-size: 10px;
`;

export const Viewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding: 1rem 1.5rem 1rem 1rem;
  box-sizing: border-box;
`;

export const Scrollbar = styled(ScrollArea.Scrollbar)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray300}; 
    &:hover {
      background: ${theme.colors.gray300};
    } 
  `}
  display: flex;
  /* user-select: none;
  touch-action: none; */
  padding: 2px;
  transition: background 160ms ease-out;

  &[data-orientation='vertical'] {
    width: 8px;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 8px;
  }
`;

export const Thumb = styled(ScrollArea.Thumb)`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple}; 
  `}
  flex: 1;
  border-radius: 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;

export const Corner = styled(ScrollArea.Corner)`
  background: white;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white}; 
  `}
  font-size: 16px;
  font-weight: regular;
  text-align: left;
`;