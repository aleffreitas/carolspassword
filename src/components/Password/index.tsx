import { useScore } from "../../hooks";
import { Bloc, Container, ContentBloc, Padlock } from "./styles";
import { BsLock, BsUnlock } from "react-icons/bs";

export function Password(){
  const { score } = useScore();

  const password = [
    8,
    9,
    9,
    1
  ]
  return(
    <Container>
      <Padlock score={score}>
        {score === 100 ? <BsUnlock /> : <BsLock />}
      </Padlock>
      <ContentBloc>
        {password.map(password => 
          <Bloc>{score === 100 ? password : '?'}</Bloc>
        )}
      </ContentBloc>
    </Container>
  );
}