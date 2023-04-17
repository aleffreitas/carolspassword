import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react";

type UserProviderProps = {
  children: ReactNode;
};

type UserProps = {
  score: number;
  welcomeModal: boolean;
  initialLoading: boolean;
  pageBonus: boolean;
  numberQuestion: number;
};

export type UserContextData = {
  data: UserProps;
  handleData: ({}: UserProps) => void;
};

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export function UserContextProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<UserProps>({} as UserProps);
  

  const handleData= useCallback(({}: UserProps) => {
    setData(data);
  }, []);

  async function getData(){
    const localStorageData = localStorage.getItem('userData');
    
    if(localStorageData){
      setData(JSON.parse(localStorageData));
      return ;
    }

    const defaultData = {
      score: 0,
      welcomeModal: true,
      initialLoading: true,
      pageBonus: false,
      numberQuestion: 0,
    };

    setData(defaultData);
    localStorage.setItem('userData', JSON.stringify(defaultData));
  }

  useEffect(() => {
    getData()
  },[])

  const values = useMemo<UserContextData>(
    () => ({
      data,
      handleData
    }),
    [
      data,
      handleData
    ],
  );

  return (
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
}
