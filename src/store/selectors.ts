import { QuestType } from '../const';
import { Quest } from '../types/quest';
import { State } from '../types/state';

const getQuests = (state: State): Quest[] => state.quests;
const getCurrentQuest = (state: State): Quest | null => state.currentQuest;
const getCurrentSortType = (state: State): QuestType => state.currentSortType;

export {
  getQuests,
  getCurrentQuest,
  getCurrentSortType
};
