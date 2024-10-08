const express = require('express');
const path = require('path');

const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
const IP = '192.168.1.108';

app.listen(PORT, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORT}`);
  });