import { createAction } from '@reduxjs/toolkit';
import { QuestType } from '../const';
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

const loadQuestById = createAction(
  ActionType.LoadQuestById,
  (currentQuest: Quest) => ({
    payload: {
      currentQuest,
    },
  }),
);

const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: QuestType) => ({
    payload: {
      sortType,
    },
  }),
);

export {
  loadQuests,
  loadQuestById,
  changeSortType
}
