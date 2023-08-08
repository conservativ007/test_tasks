import { Questions } from './questions/Questions';
import { Stickers } from './stickers/Stickers';
import { TimeAndBalls } from './time/TimeAndBalls';

import './game.scss';

export const Game = () => {
  return (
    <div className="container">
      <TimeAndBalls />
      <Stickers />
      <Questions />
    </div>
  );
};
