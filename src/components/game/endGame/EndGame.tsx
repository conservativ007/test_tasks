import { useNavigate } from 'react-router-dom';
import { questionSlice } from '../../../store/reducers/QuestionSlice';
import { userSlice } from '../../../store/reducers/UserSlice';
import { victorinaSlice } from '../../../store/reducers/VictorinaSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import './index.scss';

export const EndGame = () => {
  // const navigate = useNavigate();

  // const dispatch = useAppDispatch();
  // const { setToDefaultQuestion } = questionSlice.actions;
  // const { setDefaultUser } = userSlice.actions;
  // const { setDefaultVictorina } = victorinaSlice.actions;

  const { balls, rightAnswer, timer } = useAppSelector(
    (state) => state.victorinaReducer
  );

  // const handleClick = () => {
  //   dispatch(setToDefaultQuestion());
  //   dispatch(setDefaultUser());
  //   dispatch(setDefaultVictorina());
  //   navigate('/');
  // };

  return (
    <div className="endgame">
      <h1>Поздравляем!</h1>
      <div className="description">
        <p>
          Вы заработалм {balls} баллов, {rightAnswer} слипперов, ваше итоговое
          время {timer}с.
        </p>
      </div>
      <div className="description">
        <p>Спасибо за участие в викторине!</p>
        <p>Победители викторины будут обьявлены чуть позже.</p>
      </div>
    </div>
  );
};
