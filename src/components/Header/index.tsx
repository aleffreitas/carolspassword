import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { Container } from "./styles";

export function Header(){
  return(
    <Container>
      <Logo size={12} subTitle="Password"/>
      <Avatar />
    </Container>
  );
}