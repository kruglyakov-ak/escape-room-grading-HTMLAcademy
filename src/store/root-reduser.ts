import { createReducer } from '@reduxjs/toolkit';
import { QuestType } from '../const';
import { State } from '../types/state';
import { loadQuestById, loadQuests, changeSortType } from './actions';

const initialState: State = {
  quests: [],
  currentQuest: null,
  currentSortType: QuestType.All,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      const { quests } = action.payload;
      state.quests = quests;
    })
    .addCase(loadQuestById, (state, action) => {
      const { currentQuest } = action.payload;
      state.currentQuest = currentQuest;
    })
    .addCase(changeSortType, (state, action) => {
      const { sortType } = action.payload;
      state.currentSortType = sortType;
    });
});

export { rootReducer };
