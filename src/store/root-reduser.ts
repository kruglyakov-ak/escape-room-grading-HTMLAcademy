import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { loadQuestById, loadQuests } from './actions';

const initialState: State = {
  quests: [],
  currentQuest: null,
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
});

export { rootReducer };
