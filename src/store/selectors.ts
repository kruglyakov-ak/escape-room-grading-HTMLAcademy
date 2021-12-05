import { Quest } from '../types/quest';
import { State } from '../types/state';

const getQuests = (state: State): Quest[] => state.quests;

export {
  getQuests
};
