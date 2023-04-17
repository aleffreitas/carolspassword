import { ReactNode } from "react";
import { ScoreContextProvider } from "./Score";
import { UserContextProvider } from "./UserData";

export function AppProvider({ children }: {children: ReactNode}){
  return(
    <ScoreContextProvider>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </ScoreContextProvider>
  );
}