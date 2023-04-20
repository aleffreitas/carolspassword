import { useEffect, useState } from "react";
import { Questions } from "../../components/Questions";
import { ScoreCircle } from "../../components/Score";
import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { useData } from "../../hooks";

export function Quiz(){
  const [loading, setLoading] = useState(true);
  const [pontuation, setPontuation] = useState(0);
  const { data } = useData();
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  },[]);

  useEffect(() => {
    if(!data){
      return;
    }

    setPontuation(data?.score!);
  },[data?.score]);

  return(
    <>
      {loading ? (
        <Loading />
      ):(
        <Container>
          {/* <ScoreCircle score={pontuation} scale={0.4}/> */}
          <Questions />
        </Container>
      )}
    </>
  );
}