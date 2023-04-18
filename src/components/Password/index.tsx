import { useEffect, useState } from "react";
import { useData, useScore } from "../../hooks";
import { Bloc, Container, ContentBloc, Padlock } from "./styles";
import { BsLock, BsUnlock } from "react-icons/bs";

export function Password(){
  const [pontuation, setPontuation] = useState(0);
  const { score } = useScore();
  const { data } = useData();

  const password = [
    6,
    9,
    1
  ]

  useEffect(() => {
    setPontuation(data?.score!)
  },[data?.score])

  return(
    <Container>
      <Padlock score={pontuation}>
        {data?.winner === true ? <BsUnlock /> : <BsLock />}
      </Padlock>
      <ContentBloc>
        {password.map((password, index) => 
          <Bloc key={index}>{data?.winner === true ? password : '?'}</Bloc>
        )}
      </ContentBloc>
    </Container>
  );
}