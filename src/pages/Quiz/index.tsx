import { useEffect, useState } from "react";
import { Questions } from "../../components/Questions";
import { ScoreCircle } from "../../components/Score";
import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { useScore } from "../../hooks";

export function Quiz(){
  const [loading, setLoading] = useState(true);
  const { score } = useScore();
  
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
        <Container>
          <ScoreCircle score={score} scale={0.4}/>
          <Questions />
        </Container>
      )}
    </>
  );
}