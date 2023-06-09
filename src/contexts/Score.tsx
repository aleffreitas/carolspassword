import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react";
import { UserProps } from "./UserData";
import { useData } from "../hooks";

type ScoreProviderProps = {
  children: ReactNode;
};

type ScoreProps = {
  score: number;
};

export type ScoreContextData = {
  score: number;
  handleScore: (score: number) => void;
};

export const ScoreContext = createContext<ScoreContextData>(
  {} as ScoreContextData,
);

export function ScoreContextProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(0);
  const { data } = useData();

  const handleScore = useCallback((newScore: number) => {
    setScore(newScore);
  }, []);

  async function getData(){
    const data: UserProps = JSON.parse(localStorage.getItem("userData") ?? 'null');
    if(!data){
      return ;
    }
    setScore(data?.score ?? 0);
  }

  useEffect(() => {
    getData()
  },[data?.score]);

  const values = useMemo<ScoreContextData>(
    () => ({
      score,
      handleScore
    }),
    [
      score,
      handleScore
    ],
  );

  return (
    <ScoreContext.Provider value={values}>{children}</ScoreContext.Provider>
  );
}
