import { Container, InnerCircle, OuterCircle, Score, Text } from "./styles";

type ScoreCircleProps = {
  score: number;
}

export function ScoreCircle({ score }: ScoreCircleProps){
  return(
    <Container>
      <OuterCircle>
        <InnerCircle>
          <Text>Score</Text>
          <Score>{score}</Score>
          <Text>pts</Text>
        </InnerCircle>
      </OuterCircle>
    </Container>
  );
}