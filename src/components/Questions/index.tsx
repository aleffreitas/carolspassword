import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ScrollBox } from "./ScrollBox";
import { questions } from "./questions";
import { BoxValueQuestion, ContentQuestion, Header, KeyBox, NumberQuestion, Text, Title, ValueQuestion } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { schema } from "./validations";
import { ModalReturnQuestion } from "./ModalReturnQuestion";

interface FormDataProps {
  password: number;
}

export function Questions(){
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [wrongQuestion, setWrongQuestion] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function closeModal(){
    setOpenModal(false);
    console.log('teste')
  }

  const dataQuestion = questions?.map(question => {
    const data = {
      id: question.id,
      password: question.password,
      text: question.text
    }
    return data;
  });

  async function sendQuestion(form: FormDataProps){
    console.log(numberQuestion)
    try{
      let passwordQuestion = form?.password;
      let question = numberQuestion;

      if(!passwordQuestion){
        return;
      }

      if(dataQuestion[numberQuestion]?.password === passwordQuestion){
        setWrongQuestion(false);        
        setOpenModal(true);
        setNumberQuestion(question + 1);
        return;
      }

      setOpenModal(true);
      setWrongQuestion(true);

    } catch(e){
      console.log(e);
    }
  }

  
  return(
    <>
      <Header>
        <ContentQuestion>
          <Title>Question</Title>
          <NumberQuestion>{dataQuestion[numberQuestion]?.id}</NumberQuestion>
        </ContentQuestion>
        <BoxValueQuestion>
          <ValueQuestion>25</ValueQuestion>
          <Text>pts</Text>
        </BoxValueQuestion>
      </Header>
      <ScrollBox text={dataQuestion[numberQuestion]?.text} />

      <KeyBox onSubmit={handleSubmit(sendQuestion)}>
        <Input
          name="password"
          error={errors.password && errors.password.message}
          control={control}
          label="Insert the code here"
          placeholder="********"
          type="password"
        />
        <Button
          variant={0}
          type="submit"
          arrow
        />
      </KeyBox>

      <ModalReturnQuestion
        open={openModal}
        onClose={() => closeModal()}
        icon={!wrongQuestion ? "ok" : "wrong"}
      />
    </>
  );
}