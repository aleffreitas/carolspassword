import { Logo } from "../Logo";
import { Avatar } from "./Avatar";
import { Container } from "./styles";

export function Header(){
  return(
    <Container>
      <Logo size={12} subTitle="Password"/>
      <Avatar />
    </Container>
  );
}