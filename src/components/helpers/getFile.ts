const testUrl = 'http://85.209.148.189:4000/user';

const localUrl = process.env.REACT_APP_LOCAL_URL || testUrl;
console.log(localUrl);

export const getFile = async () => {
  const response = await fetch(localUrl);
  const blob = await response.blob();

  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'test42.xlsx';
  downloadLink.click();
};
