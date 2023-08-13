export const getFile = async (localUrl: string) => {
  console.log('getFile');
  console.log(localUrl);

  try {
    const response = await fetch(localUrl);
    const blob = await response.blob();

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'test42.xlsx';

    // Добавьте ссылку в документ
    document.body.appendChild(downloadLink);

    // Кликните по ссылке
    downloadLink.click();

    // Подождите некоторое время
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Удалите ссылку из документа
    document.body.removeChild(downloadLink);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
};
