import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { ScoreCircle } from "../../components/Score";
import { Modal } from "../../components/Modal";
import { Container, Text, Title } from "./styles";
import { Logo } from "../../components/Logo";

export function Dashboard(){
  const [openModal, setOpenModal] = useState(false);

  function openInitialModal(){
    setOpenModal(true);
  }

  function closeModal(){
    setOpenModal(false);
  }

  useEffect(() => {
    openInitialModal();
  },[]);

  return(
    <>
      <Password />
      <ScoreCircle score={100} />
      <Button text="Start the Quiz" onClick={() => closeModal} />

      <Modal open={openModal} onClose={() => closeModal()}>
        <Container>
          <Title>Welcome to</Title>
          <Logo subTitle="Password" size={16} />
          <Text>
            Complete o quiz e alcance 100 pontos para gerar a senha de desbloqueio do cadeado e, dessa forma, ter acesso ao presente dentro do baú.
            Boa sorte!
          </Text>
          <Button
            text="Let's go!"
            variant={1}
            icon="house"
            type="button" 
            onClick={() => closeModal()}
          />
        </Container>
      </Modal>
    </>
  );
}