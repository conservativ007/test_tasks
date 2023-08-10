import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  shuffleArray,
  shuffleArray2,
} from '../../components/helpers/shuffleArray';
import { IQuestion, IStickers } from '../../models/question';

// import data from '../data/data.json';
import data from '../data/data1.json';
import stickers from '../data/stickers.json';

const getShuffleArray = shuffleArray(data);

const test = (currentQuestion: IQuestion): IQuestion => {
  const getsShuffleArray = shuffleArray2(currentQuestion.answers);

  const newQuestion: IQuestion = {
    question: currentQuestion.question,
    answers: getsShuffleArray,
  };
  return newQuestion;
};

interface QuestionState {
  questions: IQuestion[];
  countQuestion: number;
  currentQuestion: IQuestion;
  endGame: boolean;
  startGame: boolean;
  blockAnswers: boolean;
  stickers: IStickers[];
}

const initialState: QuestionState = {
  questions: getShuffleArray,
  countQuestion: 0,
  currentQuestion: test(data[0]),
  endGame: false,
  startGame: false,
  blockAnswers: false,
  stickers: stickers,
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setCountQuestion(state) {
      if (state.countQuestion >= data.length - 1) {
        state.endGame = true;
        return;
      }
      state.countQuestion += 1;
    },
    setCurrentQuestion(state) {
      state.currentQuestion = test(data[state.countQuestion]);
    },
    setStartGame(state, action: PayloadAction<boolean>) {
      state.startGame = action.payload;
    },
    setClassToSticker(state, action: PayloadAction<boolean>) {
      state.stickers.map((sticker, index) => {
        if (index === state.countQuestion) {
          if (action.payload === true) {
            sticker.class += ' sticker-right';
          }
          if (action.payload === false) {
            sticker.class += ' sticker-wrong';
          }
        }
      });
    },
    setBlockAnswers(state, action: PayloadAction<boolean>) {
      state.blockAnswers = action.payload;
    },
    setToDefaultQuestion(state) {
      state.countQuestion = 0;
      state.currentQuestion = data[0];
      state.endGame = false;
      state.questions = data;
      state.stickers = stickers;
      state.startGame = false;
    },
  },
});

export default questionSlice.reducer;
