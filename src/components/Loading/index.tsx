import { Container, Content, IconLoading, Text } from "./styles";
import LoadingIcon from '../../assets/images/loading.svg'

export function Loading(){
  return(
    <Container>
      <Content>
        <IconLoading src={LoadingIcon} />
        <Text>Loading</Text>
      </Content>
    </Container>
  );
}