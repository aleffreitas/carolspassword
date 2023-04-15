import { Bloc, Container, ContentBloc, Padlock } from "./styles";

export default function Password(){
  return(
    <Container>
      <Padlock />
      <ContentBloc>
        <Bloc>1</Bloc>
        <Bloc>1</Bloc>
        <Bloc>1</Bloc>
        <Bloc>1</Bloc>
      </ContentBloc>
    </Container>
  );
}