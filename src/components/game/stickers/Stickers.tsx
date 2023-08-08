import './stickers.scss';
import { useAppSelector } from '../../../hooks/redux';
import { imageImports } from '../helpers/arraySrcOfImages';

export const Stickers = () => {
  const { stickers } = useAppSelector((state) => state.questionReducer);

  return (
    <div className="stickers">
      {stickers.map((sticker, index) => {
        return (
          <div className={`sticker ${sticker.class}`} key={index}>
            <img src={imageImports[index]} alt="" />
          </div>
        );
      })}
    </div>
  );
};
