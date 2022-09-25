const express = require('express');
const { calcUsecaseExecute } = require('./calc-usecase');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/health', (req, res) => {
  res.json({ message: 'hello world' });
});

app.post('/calc', (req, res) => {
  const { numOne, numTwo } = req.body;

  const result = calcUsecaseExecute(numOne, numTwo);

  res.json({ result });
});

app.listen(3000, () => console.log('server started on port 3000'));
