import { getFile } from '../../helpers/getFile';
import './index.scss';

const testUrl = 'http://85.209.148.189:4000/user';

const localUrl = process.env.REACT_APP_LOCAL_URL || testUrl;

export const SaveResults = () => {
  const getResults = () => {
    getFile(localUrl);
  };

  return (
    <div className="results">
      <p className="save-results" onClick={getResults}>
        скачать результаты
      </p>
    </div>
  );
};
