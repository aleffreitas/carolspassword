import { Avatar } from "..";
import { useScore } from "../../../../hooks";
import { AvatarAnimation } from "../../../AvatarAnimation";
import { Button } from "../../../Button";
import { Modal } from "../../../Modal";
import { Container, ContentPerson, DataPersonBox, Email, Name, PersonBox, Score, ScoreBox, Text } from "./styles";

type ProfileProps = {
  open: boolean;
  onClose: () => void;
}

export function Profile({ open, onClose }: ProfileProps){
  const { score } = useScore();
  return(
    <Modal  open={open} onClose={onClose} closeIcon >
      <Container>
        <ContentPerson>
          <PersonBox>
            <Avatar />
            <DataPersonBox>
              <Name>Carol</Name>
              <Email>carol@gmail.com</Email>
            </DataPersonBox>
          </PersonBox>
          <ScoreBox>
            <Score>{score}</Score>
            <Text>pts</Text>
          </ScoreBox>
        </ContentPerson>

        <AvatarAnimation variantAnimation="dancing" />

        <Button
          type="button"
          variant={1}
          text="Logout"
          icon="power"
          onClick={() => console.log('teste')}  
        />
      </Container>
    </Modal>
  );
}