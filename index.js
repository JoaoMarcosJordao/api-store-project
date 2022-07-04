require('dotenv').config();
const express = require('express');
const app = express();

const productsController = require('./controllers/productsController');

app.use(express.json());

const port = process.env.PORT;

app.get('/', productsController.getAll);

app.listen(port, () => console.log('Rodando na porta', port)); 