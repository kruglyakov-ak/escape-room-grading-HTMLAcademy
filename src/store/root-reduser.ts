import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/store';

const initialState: State = {
  quests: [],
};

const rootReducer = createReducer(initialState, (builder) => {

});

export { rootReducer };
