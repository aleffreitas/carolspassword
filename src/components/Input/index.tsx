import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Container, InputStyled, TitleInput } from "./styles";
import { Control, Controller } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  control: Control;
  name: string;
  error: string;
  type: HTMLInputTypeAttribute;
};

export function Input({ label, placeholder, type, name, error, control, ...rest }: InputProps){
  return(
    <Container>
      <TitleInput>{label}</TitleInput>
      <Controller
        name={name}
        control={control}
        render={({field: { value, onChange }}) => (
          <InputStyled
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            {...rest}
          />
        )}
      />
    </Container>
  );
}