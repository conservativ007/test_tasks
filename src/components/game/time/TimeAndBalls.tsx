import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { victorinaSlice } from '../../../store/reducers/VictorinaSlice';
import './index.scss';
import imgBalls from '../../../assets/timers/bally.png';
import imgTimer from '../../../assets/timers/secundomer.png';
import { useEffect } from 'react';
import { StartGame } from '../startGame/StartGame';

export const TimeAndBalls = () => {
  const { balls, timer } = useAppSelector((state) => state.victorinaReducer);
  const { startGame } = useAppSelector((state) => state.questionReducer);
  const { setIncreaseTime } = victorinaSlice.actions;
  const dispatch = useAppDispatch();

  const getTimer = () => {
    dispatch(setIncreaseTime());
  };

  useEffect(() => {
    if (startGame === false) return;
    const interval = setInterval(() => getTimer(), 1000);

    return () => clearInterval(interval);
  }, [startGame]);

  return (
    <>
      {startGame === false ? <h1>Викторина</h1> : ''}

      <div className="balls-container">
        <div className="balls">
          <p className="balls-description">Баллы</p>
          <img src={imgBalls} alt="" />
          <p className="balls-value">{balls}</p>
        </div>
        <StartGame />
        <div className="time">
          <p className="time-description">Время</p>
          <img src={imgTimer} alt="" />
          <p className="time-value">{timer}</p>
        </div>
      </div>
    </>
  );
};
