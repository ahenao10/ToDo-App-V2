let todos = require('./TodoFunctions/todos.json');

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

let TodosV1 = []

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Hello World!');
});

app.get('/click', (req, res) => {
  res.json({ saludo: 'Hola mundo' });
  console.log('Clicked!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
  console.log('Todos enviados!');
});

app.post('/add-todos', (req, res) => {
  try {
    todos = req.body;
    res.json(todos);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong', message: error.message });
  }

})

app.delete('/delete-todo', (req, res) => {
  try {
    todos.pop();
    res.json(todos);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong', message: error.message });
  }

})

app.listen(PORT, (err) => {
  console.log(`Server is running on port: ${PORT}`);
});