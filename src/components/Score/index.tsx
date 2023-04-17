import { useEffect, useState } from "react";
import { Container, InnerCircle, OuterCircle, Score, Text } from "./styles";

type ScoreCircleProps = {
  score: number;
  scale?: number;
}

export function ScoreCircle({ score, scale }: ScoreCircleProps){
  return(
    <Container scale={scale}>
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