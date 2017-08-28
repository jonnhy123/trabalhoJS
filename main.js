"use stric"
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('.'));

app.get('/api', (req, res) => {
  res.status(200).send('Aplicação executando')
});

app.get('/tabuada', (req, res) => {
  res.status(200).send('Aplicação executando no trabalho')
  const nome = req.body.tabuada
});

app.listen(3000, function () {
  console.log('Seridor iniciando.')
});
