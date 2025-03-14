let todos = require('./TodoFunctions/todos.json');
const operations = require('./TodoFunctions/index.js');
const { getStadistics } = require('./TodoStadistics/index.js');
const frases = require('./TodoClick/index.json');
let click = 0;

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/click', (req, res) => {
  while (click < frases.length) {
    res.json(frases[click]);
    console.log('Clicked!');
    click++;
    return;
  }
  if (click === frases.length) {
    click = 0;
    res.json(frases[click]);
    console.log('Clicked!');
    click++;
  }
});

app.get('/todos', (req, res) => {
  res.json(todos);
  console.log('Todos enviados!');
});

app.post('/mod-todos', (req, res) => {
  try {
    const todoToAdmin = req.body;
    if (todoToAdmin.data !== null) {

      const result = operations[todoToAdmin.op](todoToAdmin.data);
      res.json(result || todos);

    } else {
      console.log('No se pudo agregar el todo');
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong', message: error.message });
  }

})

app.get('/stadistics', (req, res) => {
  const obtainStadistics = getStadistics();
  const month = new Date().toLocaleString('default', { month: 'short' });
  res.json(obtainStadistics);
  console.log('Stadistics sent!');
});

app.listen(PORT, (err) => {
  console.log(`Server is running on port: ${PORT}`);
});