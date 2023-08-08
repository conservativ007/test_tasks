import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import victorinaReducer from './reducers/VictorinaSlice';
import questionReducer from './reducers/QuestionSlice';

const rootReducer = combineReducers({
  userReducer,
  victorinaReducer,
  questionReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
