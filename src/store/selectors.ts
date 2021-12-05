import { Quest } from '../types/quest';
import { State } from '../types/state';

const getQuests = (state: State): Quest[] => state.quests;
const getCurrentQuest = (state: State): Quest | null => state.currentQuest;

export {
  getQuests,
  getCurrentQuest
};
