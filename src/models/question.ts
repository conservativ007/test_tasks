export interface IAnswer {
  isTrue: boolean;
  answer: string;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

export interface IStickers {
  src: string;
  class: string;
}

export interface IStatistics {
  userData: string;
  city: string;
  balls: number;
  rightAnswer: number;
  wrongAnswer: number;
  time: number;
}
