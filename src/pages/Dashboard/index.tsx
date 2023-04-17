import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { ScoreCircle } from "../../components/Score";
import { WelcomeModal } from "./WelcomeModal";
import { WinnerModal } from "./WinnerModal";
import { useNavigate } from "react-router-dom";
import { useData, useScore } from "../../hooks";
import { Loading } from "../../components/Loading";

export function Dashboard(){
  const [openModal, setOpenModal] = useState(false);
  const [pontuation, setPontuation] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { score, handleScore } = useScore();
  const { data, handleData } = useData();

  function openInitialModal(){
    setOpenModal(true);
  }

  function closeInitialModal(){
    setOpenModal(false);
    handleData({
      welcomeModal: false,
      initialLoading: false,      
    })
  }

  async function isWinner(){
    if(!data){
      return ;
    }

    if(data?.score === 100 && data?.numberQuestion === 4){
      handleData({ winner: true });
    };
  }

  function closeModal(){
    setOpenModal(false);
  } 

  async function resetProgress(){
    if(!data){
      return ;
    }

    handleData({
      numberQuestion: 0,
      score: 0,
      winner: false
    });

    handleScore({ score: 0 });
  }

  useEffect(() => {
    openInitialModal();
    isWinner()
  },[]);
  
  useEffect(() => {
    setPontuation(data?.score!)
  },[data?.score]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  },[]);

  return(
    <>
      {loading ? (
        <Loading />
      ):(
        <>
          <Password />
          <ScoreCircle score={pontuation} />
          {data?.winner === true ? (
            <Button
              text="Reset Progress"
              variant={1}
              icon="arrowBack"
              onClick={() => resetProgress()}
            />
          ): (      
            <Button
              text={data?.numberQuestion! > 0 ? "Continue Quiz" : "Start the Quiz"}
              variant={0}
              onClick={() => navigate("/quiz")}
            />
          )}


          {data?.welcomeModal &&(
            <WelcomeModal open={openModal} onClose={() => closeInitialModal()} />
          )}

          {data?.winner &&(
            <WinnerModal open={false} onClose={() => closeModal()}/>
          )}
        </>
      )}
    </>
  );
}