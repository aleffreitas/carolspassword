import { ButtonHTMLAttributes } from "react";
import { ButtonAction } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps>{
  text: string;
}

export default function Button({ text }: ButtonProps){
  return(
    <ButtonAction>{text}</ButtonAction>
  );
}