import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay } from './styles';
import { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ open, onClose, children }: ModalProps){
  return(
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay>
          <Content>{children}</Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}