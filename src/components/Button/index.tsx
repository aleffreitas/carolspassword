import { ButtonHTMLAttributes } from "react";
import { ButtonAction, Icon } from "./styles";
import { BsArrowCounterclockwise, BsHouse, BsPower } from "react-icons/bs";

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps>{
  text: string;
  onClick: () => void;
  variant?: 0 | 1;
  icon?: 'power' | 'arrowBack' | 'house';
}

export function Button({ text, onClick, variant, icon }: ButtonProps){

  const iconButton = {
    power: <BsPower />,
    arrowBack: <BsArrowCounterclockwise />,
    house: <BsHouse />
  }
  
  return(
    <ButtonAction
      onClick={onClick}
      variant={variant}
    >
      {variant === 1 &&(
        <Icon>
          {icon && iconButton[icon]}
        </Icon>
      )}
      
      {text}
    </ButtonAction>
  );
}