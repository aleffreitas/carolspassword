import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ScrollBox } from "./ScrollBox";
import { questions } from "./questions";
import { BoxValueQuestion, ContentQuestion, Header, KeyBox, NumberQuestion, Text, Title, ValueQuestion } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { schema } from "./validations";
import { ModalReturnQuestion } from "./ModalReturnQuestion";
import { useData, useScore } from "../../hooks";
import { useNavigate } from "react-router-dom";

interface FormDataProps extends FieldValues{
  password: number;
}

type FieldValuesWithoutPassword = Omit<FieldValues, "password">;

export function Questions(){
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [wrongQuestion, setWrongQuestion] = useState(false);
  const { handleScore, score } = useScore();
  const { data, handleData } = useData();
  const navigate = useNavigate();

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FieldValuesWithoutPassword>({
    resolver: yupResolver(schema)
  });

  function closeModal(){
    setOpenModal(false);

    if(data?.winner){
      navigate("/dashboard");
    }
  }

  async function getData(){
    if(!data){
      return ;
    }
    setNumberQuestion(data?.numberQuestion!)
  }

  const dataQuestion = questions?.map(question => {
    const data = {
      id: question.id,
      password: question.password,
      points: question.points,
      text: question.text
    }
    return data;
  });

  async function finalGame(){
    if(!data){
      return ;
    }

    handleData({ 
      winner: true,
      winnerModal: true,
      bonusModal: true,
    });
  }

  async function isWinner(){
    if(!data){
      return ;
    }

    if(data?.score === 100 && data?.numberQuestion === 4){
      handleData({ winner: true });
      finalGame();
    };
  }

  useEffect(() => {
    getData();
  },[data?.numberQuestion]);

  useEffect(() => {
    isWinner();
  },[data?.score]);

  async function sendQuestion(formData: FieldValuesWithoutPassword){
    try{
      let passwordQuestion = formData?.password;

      if(!passwordQuestion){
        return;
      }

      if(dataQuestion[numberQuestion]?.password === passwordQuestion){
        setWrongQuestion(false);        
        handleScore(data?.score! + dataQuestion[numberQuestion]?.points);
        handleData({
          numberQuestion: data?.numberQuestion! + 1,
          score: score + dataQuestion[numberQuestion]?.points,
          winner: data?.score === 100 && data?.numberQuestion === 4 ? true : false,
        });

        setOpenModal(true);
        
        reset();
        return;
      }

      setOpenModal(true);
      setWrongQuestion(true);
      reset();
      return ;

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
          error=''
          control={control}
          label="Insert the code here"
          placeholder="********"
          type="password"
        />
        <Button
          variant={0}
          type="submit"
          arrow
          disabled={data?.numberQuestion === 4}
        />
      </KeyBox>

      <ModalReturnQuestion
        open={openModal}
        onClose={() => closeModal()}
        icon={!wrongQuestion ? "ok" : "wrong"}
        finishQuestions={data?.numberQuestion === 4 ? true : false}
      />
    </>
  );
}