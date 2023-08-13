import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';

import bagel from '../images/bagel.png';
import icecream from '../images/ice-cream.png';

export const Question = () => {
  const [srcImage, setSrcImage] = useState<string>('');
  const { currentQuestion } = useAppSelector((state) => state.questionReducer);

  useEffect(() => {
    if (currentQuestion.isImage === false) return;
    if (currentQuestion.imageName === '') return;

    setSrcImage(currentQuestion.imageName);
  }, [currentQuestion]);

  return (
    <div className="question">
      <p>{currentQuestion.question}</p>

      {currentQuestion.isImage === true ? (
        <div className="question-image">
          <img src={srcImage === 'bagel' ? bagel : icecream} alt="" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
