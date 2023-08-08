import http from 'http';
import fs from 'node:fs';
import cors from 'cors';
import { saveToExcel3 } from './saveToExcel3.js';

const PORT = 4010;

const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    if (req.url === '/user' && req.method === 'POST') {
      let requestData = '';

      req.on('data', (chunk) => {
        requestData += chunk;
      });

      req.on('end', () => {
        requestData = JSON.parse(requestData);
        // console.log(requestData);
        saveToExcel3(requestData);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Received your request!');
      });

      return;
    } else if (req.url === '/user' && req.method === 'GET') {
      // Путь к вашему файлу, который вы хотите отдать клиенту
      const filePath = './excelFiles/test42.xlsx';

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error reading the file');
          return;
        }

        res.setHeader('Content-disposition', 'attachment; filename=file.xlsx');
        res.setHeader('Content-type', 'application/octet-stream');
        res.writeHead(200);
        res.end(data);
      });

      return;
    }

    res.end('incorrect data');
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
