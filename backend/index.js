let todos = require('./TodoFunctions/todos.json');
const fs = require('fs');

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

const operations = {
  add: (todoToAdd) => {
    try {
      todos.push(todoToAdd);
      fs.writeFileSync('./TodoFunctions/todos.json', JSON.stringify(todos, null, 2));
      console.log('Todo agregado!');
      return todos;
    } catch (error) {
      console.log(error);
      return {error: 'No se pudo agregar el todo', message: error.message};
    }
  },
  update: (todoToUpdate) => {
    try {
      const index = todos.findIndex(todo => todoToUpdate.text === todo.text);
      if(index !== -1){
        todos[index] = todoToUpdate;
        fs.writeFileSync('./TodoFunctions/todos.json', JSON.stringify(todos, null, 2));
        console.log('Todo actualizado!');
        return todos;
      } else {
        console.log('No se encontro el todo');
        return {error: 'No se encontro el todo'};
      }
    } catch (error) {
      console.log(error);
      return {error: 'No se pudo actualizar el todo', message: error.message};
    }
  },
  delete: (todoToDelete) => {
    try {
      const index = todos.findIndex(todo => todoToDelete.text === todo.text);
      if(index !== -1){
        todos.splice(index, 1);
        fs.writeFileSync('./TodoFunctions/todos.json', JSON.stringify(todos, null, 2));
        console.log('Todo eliminado!');
        return todos;
      } else {
        console.log('No se encontro el todo');
        return {error: 'No se encontro el todo'};
      }
    } catch (error) {
      console.log(error);
      return {error: 'No se pudo eliminar el todo', message: error.message};
    }
  }
}

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

app.post('/mod-todos', (req, res) => {
  try {
    const todoToAdmin = req.body;
    if(todoToAdmin.data !== null){

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