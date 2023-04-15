import { Container, InnerCircle, OuterCircle, Score, Text } from "./styles";

type ScoreCircleProps = {
  score: number;
}

export default function ScoreCircle({ score }: ScoreCircleProps){
  return(
    <Container>
      {/* <Neon> */}
        <OuterCircle>
          <InnerCircle>
            <Text>Score</Text>
            <Score>{score}</Score>
            <Text>pts</Text>
          </InnerCircle>
        </OuterCircle>
      {/* </Neon> */}
    </Container>
  );
}