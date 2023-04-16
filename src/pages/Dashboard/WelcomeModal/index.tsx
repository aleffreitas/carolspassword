import { Button } from "../../../components/Button";
import { Logo } from "../../../components/Logo";
import { Modal } from "../../../components/Modal";
import { Container, Text, Title } from "./styles";

type WelcomeModalProps = {
  open: boolean;
  onClose: () => void;
}

export function WelcomeModal({ onClose, open }: WelcomeModalProps){
  return(
    <Modal open={open} onClose={() => onClose()}>
      <Container>
        <Title>Welcome to</Title>
        <Logo subTitle="Password" size={16} />
        <Text>
          Complete o quiz e alcance 100 pontos para gerar a senha de desbloqueio do cadeado e, dessa forma, ter acesso ao presente dentro do baú.
          Boa sorte!
        </Text>
        <Button
          text="Let's go!"
          type="button" 
          variant={0}
          onClick={() => onClose()}
        />
      </Container>
    </Modal>
  );
}