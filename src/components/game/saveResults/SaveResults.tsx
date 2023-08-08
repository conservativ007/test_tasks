import { getFile } from '../../helpers/getFile';
import './index.scss';

export const SaveResults = () => {
  const getResults = () => {
    console.log(42);
    getFile();
  };

  return (
    <p className="save-results" onClick={getResults}>
      скачать результаты
    </p>
  );
};
