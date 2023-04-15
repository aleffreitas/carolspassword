import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { ScoreCircle } from "../../components/Score";

export function Dashboard(){
  return(
    <>
      <Password />
      <ScoreCircle score={100} />
      <Button text="Start the Quiz"/>
    </>
  );
}