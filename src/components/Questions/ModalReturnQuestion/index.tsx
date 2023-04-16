import { BsCheck2Circle, BsEmojiFrown } from "react-icons/bs";
import { Button } from "../../Button";
import { Modal } from "../../Modal";
import { Container, Icon, Text } from "./styles";

type ModalReturnQuestionProps = {
  open: boolean;
  onClose: () => void;
  icon: 'ok' | 'wrong';
}

export function ModalReturnQuestion({ open, onClose, icon }: ModalReturnQuestionProps){
  
  const selectedIcon = {
    ok: <BsCheck2Circle />,
    wrong: <BsEmojiFrown />
  }
  
  return(    
    <Modal
      open={open}
      onClose={onClose}
    >
      <Container>
        <Icon icon={icon}>
          {selectedIcon[icon]}
        </Icon>
        <Text>{icon === 'ok' ? 'Correct!' : 'Vishhh Wrong!'}</Text>
        <Button
          variant={0}
          text="Next Question"
        />
      </Container>
    </Modal>
  );
}