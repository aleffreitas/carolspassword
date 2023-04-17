import { useContext } from 'react';

import { ScoreContextData, ScoreContext } from '../contexts/Score';

export function useScore(): ScoreContextData {
  return useContext(ScoreContext);
}