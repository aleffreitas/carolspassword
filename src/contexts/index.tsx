import { ReactNode } from "react";
import { ScoreContextProvider } from "./Score";

export function AppProvider({ children }: {children: ReactNode}){
  return(
    <ScoreContextProvider>
      {children}
    </ScoreContextProvider>
  );
}