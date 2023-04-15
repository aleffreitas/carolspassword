import { useState } from "react";
import { CircleButton, Icon } from "./styles";

export default function Avatar(){
  const [ open, setOpen] = useState(false);

  function closeModal(){
    setOpen(false);
  }

  return(
    <>
      <CircleButton onClick={() => setOpen(true)}>
        <Icon />
      </CircleButton>
    </>
  );
}