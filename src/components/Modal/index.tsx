import * as Dialog from '@radix-ui/react-dialog';
import { ButtonClose, Content, Icon, Overlay } from './styles';
import { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  closeIcon?: boolean;
}

export function Modal({ open, onClose, children, closeIcon }: ModalProps){
  return(
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay>
          <Content>
            {closeIcon && (
              <ButtonClose onClick={onClose}>
                <Icon />
              </ButtonClose>
            )}
            {children}
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}