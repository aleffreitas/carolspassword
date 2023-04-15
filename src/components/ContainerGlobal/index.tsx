import { ReactNode } from "react";
import { Container } from "./styles";

type ContainerGlobalProps = {
  children: ReactNode;
};

export default function ContainerGlobal({ children }: ContainerGlobalProps){
  return(
    <Container>{children}</Container>
  );
}