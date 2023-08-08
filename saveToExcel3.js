import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Получаем путь к текущему файлу
const __dirname = path.dirname(__filename); // Получаем директорию текущего файла
const filePath = path.join(__dirname, 'excelFiles', 'test42.xlsx'); // Полный путь до файла

export const saveToExcel3 = async (data) => {
  console.log(data);

  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet('test');

    const row = worksheet.addRow([
      data.statistic.userData,
      data.statistic.city,
      data.statistic.time,
      data.statistic.balls,
      data.statistic.rightAnswer,
      data.statistic.wrongAnswer,
    ]);

    await workbook.xlsx.writeFile(filePath);
    console.log('Файл обновлен успешно.');
  } catch (error) {
    console.error('Ошибка при сохранении файла:', error);
  }
};
