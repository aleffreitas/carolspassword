import { ReactNode, createContext, useCallback, useMemo, useState } from "react";

type ScoreProviderProps = {
  children: ReactNode;
};

type ScoreProps = {
  score: number;
};

export type ScoreContextData = {
  score: number;
  handleScore: ({ score }: ScoreProps) => void;
};

export const ScoreContext = createContext<ScoreContextData>(
  {} as ScoreContextData,
);

export function ScoreContextProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(0);

  const handleScore = useCallback(({ score }: ScoreProps) => {
    setScore(score);
  }, []);

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
