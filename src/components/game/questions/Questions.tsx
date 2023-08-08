import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { questionSlice } from '../../../store/reducers/QuestionSlice';
import { victorinaSlice } from '../../../store/reducers/VictorinaSlice';
import './questions.scss';
import { useNavigate } from 'react-router-dom';
import { IStatistics } from '../../../models/question';
import { sendStatistic } from '../../helpers/sendStatistic';
import { setColorToElemOfAnswer } from './helpers/setColorToElemOfAnswer';
import { setClearClassToAnswers } from './helpers/setClearClassToAnswers';
import { checkStartGame } from './helpers/checkStartGame';

import { setToast } from '../../helpers/setToast';

export const Questions = () => {
  const dispatch = useAppDispatch();
  const answersRef = useRef(null);

  const {
    setCountQuestion,
    setCurrentQuestion,
    setClassToSticker,
    setBlockAnswers,
  } = questionSlice.actions;

  const {
    setRightAnswer,
    setWrongAnswer,
    setTrackOfCorrectAnswers,
    setZeroToTrackOfCorrectAnswers,
    setLastAnswer,
  } = victorinaSlice.actions;

  const { currentQuestion, endGame, startGame, blockAnswers } = useAppSelector(
    (state) => state.questionReducer
  );

  const {
    balls,
    rightAnswer,
    wrongAnswer,
    timer,
    trackOfCorrectAnswers,
    lastAnswerIsRight,
  } = useAppSelector((state) => state.victorinaReducer);

  const { user } = useAppSelector((state) => state.userReducer);

  const navigate = useNavigate();

  const handleClick = (
    answer: boolean,
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (checkStartGame(startGame) === false) {
      setToast('вам нужно начать игру');
      return;
    }

    if (blockAnswers === true) {
      console.log('кнопки заблокированы!');
      return;
    }
    answer === true ? setActionToRightAnswer() : setActionToWrongAnswer();
    dispatch(setBlockAnswers(true));

    setColorToElemOfAnswer(answer, event);

    setTimeout(nextQuestion, 1000);
  };

  const setActionToRightAnswer = () => {
    dispatch(setTrackOfCorrectAnswers());
    dispatch(setRightAnswer(1));
    dispatch(setClassToSticker(true));
    dispatch(setLastAnswer(true));
  };

  const setActionToWrongAnswer = () => {
    dispatch(setWrongAnswer(1));
    dispatch(setClassToSticker(false));
    dispatch(setZeroToTrackOfCorrectAnswers());
    dispatch(setLastAnswer(false));
  };

  const nextQuestion = () => {
    dispatch(setCountQuestion());
    dispatch(setCurrentQuestion());
    setClearClassToAnswers();
    dispatch(setBlockAnswers(false));
  };

  useEffect(() => {
    if (
      trackOfCorrectAnswers % 3 === 0 &&
      startGame === true &&
      lastAnswerIsRight === true
    ) {
      setToast(
        'Вы получилил бонус за 3 правильных ответа подряд - "КОМБО" + 100 баллов'
      );
    }
  }, [trackOfCorrectAnswers, lastAnswerIsRight]);

  useEffect(() => {
    if (endGame === false) return;

    const statistic: IStatistics = {
      userData: user.userData,
      city: user.city,
      balls,
      rightAnswer,
      wrongAnswer,
      time: timer,
    };

    sendStatistic(statistic);

    navigate('/endgame');
  }, [endGame]);

  return (
    <div className="questions">
      <p className="question">{currentQuestion.question}</p>
      <div className="answers" ref={answersRef}>
        {currentQuestion.answers.map((answer, index) => {
          return (
            <p
              onClick={(e) => handleClick(answer.isTrue, e)}
              className={`answer blue`}
              key={index}
            >
              {answer.answer}
            </p>
          );
        })}
      </div>
    </div>
  );
};
