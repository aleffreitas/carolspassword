import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { Logo } from "../../../components/Logo";
import { Modal } from "../../../components/Modal";
import { Container, Emphasis, Text, Title } from "./styles";
import { useData } from "../../../hooks";

export function ModalBonus(){
  const [open, setOpen] = useState(false);
  const { data, handleData } = useData();

  function closeModal(){
    setOpen(false);
    handleData({ bonusModal: false });
  }
 

  useEffect(() => {
    if (!data) return;

    if(data?.bonusModal === true){
      setOpen(true);
    }
  },[]);

  return(
    <Modal open={open} onClose={() => closeModal()}>
      <Container>
        <Title>Bonus</Title>
        <Logo size={16} subTitle="Animations" />
        <Text>
          Você completou o quiz com sucesso e desbloqueou 
          a sessão de bônus do game. Aqui você irá encontrar 
          algumas animações da <Emphasis> Carol</Emphasis>, 
          utilizadas ou não no game. Se divirta!
        </Text>
        <Button
          type="button"
          variant={0}
          text="Let's go!"
          onClick={() => closeModal()}
        />
      </Container>
    </Modal>
  );
}