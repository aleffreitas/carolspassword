import { Questions } from "../../components/Questions";
import { ScoreCircle } from "../../components/Score";
import { Container } from "./styles";

export function Quiz(){
  return(
    <Container>
      <ScoreCircle score={100} scale={0.4}/>
      <Questions />
    </Container>
  );
}