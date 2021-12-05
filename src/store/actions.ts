import { createAction } from '@reduxjs/toolkit';
import { ActionType } from "../types/action";
import { Quest } from '../types/quest';

const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests: Quest[]) => ({
    payload: {
      quests,
    },
  }),
);

export {
  loadQuests
}
