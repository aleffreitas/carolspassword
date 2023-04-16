import { ReactNode } from 'react';
import { questions } from '../questions';
import { Corner, Root, Scrollbar, Text, Thumb, Viewport } from './styles';

type ScrollBoxProps = {
  text: ReactNode;
}

export function ScrollBox({ text }: ScrollBoxProps){
  return(

    <Root>
      <Viewport>
        {text}        
      </Viewport>
      
      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
    <Corner />
  </Root>
  );
}