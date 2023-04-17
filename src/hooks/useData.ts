import { useContext } from 'react';

import { UserContextData, UserContext } from '../contexts/UserData';

export function useData(): UserContextData {
  return useContext(UserContext);
}