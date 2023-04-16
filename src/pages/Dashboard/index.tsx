import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { ScoreCircle } from "../../components/Score";
import { WelcomeModal } from "./WelcomeModal";
import { WinnerModal } from "./WinnerModal";

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
  },[])

  return(
    <>
      <Password />
      <ScoreCircle score={100} />
      <Button text="Start the Quiz" variant={0} onClick={() => console.log('teste')} />

      <WelcomeModal open={openModal} onClose={() => closeModal()} />

      <WinnerModal open={false} onClose={() => closeModal()}/>
    </>
  );
}