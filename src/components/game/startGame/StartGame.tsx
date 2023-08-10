import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { questionSlice } from '../../../store/reducers/QuestionSlice';

import './startGame.scss';

export const StartGame = () => {
  const { setStartGame } = questionSlice.actions;
  const { startGame } = useAppSelector((state) => state.questionReducer);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setStartGame(true));
  };

  if (startGame === false) {
    return (
      <div className="start-game">
        <p className="victorina">Викторина</p>
        <p onClick={handleClick} className="describe">
          Начать
        </p>
      </div>
    );
  }

  return <div style={{ display: 'none' }}></div>;
};
