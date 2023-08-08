import { IAnswer, IQuestion } from '../../models/question';

export const shuffleArray = (array: IQuestion[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
export const shuffleArray2 = (array: IAnswer[]) => {
  const newArray = [...array];

  newArray.sort(() => Math.random() - 0.5);

  return newArray;
};
