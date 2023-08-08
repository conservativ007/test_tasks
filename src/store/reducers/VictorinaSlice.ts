import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VictorinaState {
  balls: number;
  timer: number;
  rightAnswer: number;
  wrongAnswer: number;
  trackOfCorrectAnswers: number;
  lastAnswerIsRight: boolean;
}

const initialState: VictorinaState = {
  balls: 0,
  timer: 0,
  rightAnswer: 0,
  wrongAnswer: 0,
  trackOfCorrectAnswers: 0,
  lastAnswerIsRight: false,
};

export const victorinaSlice = createSlice({
  name: 'victorina',
  initialState,
  reducers: {
    setIncrementBall(state, action: PayloadAction<number>) {
      state.balls += action.payload;
    },
    setRightAnswer(state, action: PayloadAction<number>) {
      state.rightAnswer += action.payload;
      state.balls += 30;
    },
    setWrongAnswer(state, action: PayloadAction<number>) {
      state.wrongAnswer += action.payload;
    },
    setIncreaseTime(state) {
      state.timer += 1;

      return;
    },
    setTrackOfCorrectAnswers(state) {
      state.trackOfCorrectAnswers += 1;
      if (state.trackOfCorrectAnswers % 3 === 0) {
        state.balls += 70;
      }
    },
    setZeroToTrackOfCorrectAnswers(state) {
      state.trackOfCorrectAnswers = 0;
    },
    setLastAnswer(state, action: PayloadAction<boolean>) {
      state.lastAnswerIsRight = action.payload;
    },
    setDefaultVictorina(state) {
      state.wrongAnswer = 0;
      state.rightAnswer = 0;
      state.balls = 0;
      state.timer = 0;
      state.trackOfCorrectAnswers = 0;
    },
  },
});

export default victorinaSlice.reducer;
