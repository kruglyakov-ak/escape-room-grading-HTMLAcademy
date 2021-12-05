import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { loadQuests } from './actions';

const initialState: State = {
  quests: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      const { quests } = action.payload;
      state.quests = quests;
    })
});

export { rootReducer };
