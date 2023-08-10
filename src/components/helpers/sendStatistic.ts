import axios from 'axios';
import { IStatistics } from '../../models/question';

const testUrl = 'http://85.209.148.189:4010/user';
const localUrl = process.env.REACT_APP_LOCAL_URL || testUrl;

console.log(localUrl);

export const sendStatistic = (statistic: IStatistics) => {
  axios.post(localUrl, { statistic });
  // axios.post(testUrl, { statistic });
};
