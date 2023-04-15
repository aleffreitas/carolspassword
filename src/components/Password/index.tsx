import { Bloc, Container, ContentBloc, Padlock } from "./styles";

export function Password(){
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