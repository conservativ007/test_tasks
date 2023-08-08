import { useNavigate } from 'react-router-dom';
import { questionSlice } from '../../../store/reducers/QuestionSlice';
import { userSlice } from '../../../store/reducers/UserSlice';
import { victorinaSlice } from '../../../store/reducers/VictorinaSlice';
import { useAppDispatch } from '../../../hooks/redux';

import './index.scss';

export const EndGame = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { setToDefaultQuestion } = questionSlice.actions;
  const { setDefaultUser } = userSlice.actions;
  const { setDefaultVictorina } = victorinaSlice.actions;

  const handleClick = () => {
    dispatch(setToDefaultQuestion());
    dispatch(setDefaultUser());
    dispatch(setDefaultVictorina());
    navigate('/');
  };

  return (
    <div className="endgame">
      <h1>EndGame</h1>
      <p onClick={handleClick}>начать занаво</p>
    </div>
  );
};
