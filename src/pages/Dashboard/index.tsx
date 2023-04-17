import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { ScoreCircle } from "../../components/Score";
import { WelcomeModal } from "./WelcomeModal";
import { WinnerModal } from "./WinnerModal";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../hooks";

export function Dashboard(){
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { score } = useScore();

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
      <ScoreCircle score={score} />
      <Button text="Start the Quiz" variant={0} onClick={() => navigate("/quiz")} />

      <WelcomeModal open={openModal} onClose={() => closeModal()} />

      <WinnerModal open={false} onClose={() => closeModal()}/>
    </>
  );
}