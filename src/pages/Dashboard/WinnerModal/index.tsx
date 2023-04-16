import { AvatarAnimation } from "../../../components/AvatarAnimation";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { Container, Emphasis, Text, Title } from "./styles";

type WinnerModalProps = {
  open: boolean;
  onClose: () => void;
}

export function WinnerModal({ open, onClose }: WinnerModalProps){
  return(
    <Modal open={open} onClose={onClose}>
      <Container>
        <Title>Congratulations!</Title>
        <AvatarAnimation variantAnimation="dancingTwo" />
        <Text>
          Você obteve <Emphasis withPurple >100</Emphasis> <Emphasis>pontos</Emphasis> e concluiu com sucesso o game: 
          <Emphasis withPurple > Carol’s</Emphasis> <Emphasis>Password</Emphasis>. Agora vá em frente, pegue o código 
          do cadeado e abra o baú do presente, que te aguarda 
          com alegria e, uma pitada de nostalgia.
        </Text>
        <Button
          type="button"
          variant={0}
          text="Show me the code!"
          onClick={() => onClose()}
        />
      </Container>
    </Modal>
  );
}