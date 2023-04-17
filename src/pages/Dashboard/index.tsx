import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { ScoreCircle } from "../../components/Score";
import { WelcomeModal } from "./WelcomeModal";
import { WinnerModal } from "./WinnerModal";
import { useNavigate } from "react-router-dom";
import { useData, useScore } from "../../hooks";

export function Dashboard(){
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { score } = useScore();
  const { data, handleData } = useData();

  function openInitialModal(){
    setOpenModal(true);
  }

  function closeInitialModal(){
    setOpenModal(false);
    handleData({welcomeModal: false})
  }

  // async function isWinner(){
  //   if(!data){
  //     return ;
  //   }

  //   if(data?.score === 100 && numberQuestion === 4){
  //     handleData({ winner: true });
  //   };
  // }

  function closeModal(){
    setOpenModal(false);
  }

  useEffect(() => {
    openInitialModal();
  },[]);

  return(
    <>
      <Password />
      <ScoreCircle score={score} />
      <Button
        text={data?.numberQuestion! > 0 ? "Continue Quiz" : "Start the Quiz"}
        variant={0}
        onClick={() => navigate("/quiz")}
      />

      {data?.welcomeModal &&(
        <WelcomeModal open={openModal} onClose={() => closeInitialModal()} />
      )}

      {data?.winner &&(
        <WinnerModal open={false} onClose={() => closeModal()}/>
      )}
    </>
  );
}