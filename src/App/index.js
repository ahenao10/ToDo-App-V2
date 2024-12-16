import React from 'react';
import { ToDoAddSearch } from '../ToDoAddSearch/index.js';
import { TodoContext } from '../TodoContext/index.js';
import { TodoItem } from '../TodoItem';
import './App.css';
import { TodoList } from './TodoList/index.js';

function App() {

  const { searchedTodos: todos, updateTodos } = React.useContext(TodoContext);

  return (
    <div className="App">
      <div className="todos-container">
        <h2>ToDo List</h2>
        <ToDoAddSearch></ToDoAddSearch>
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              setTodos={(updateTodo) => updateTodos(updateTodo)}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export default App;
