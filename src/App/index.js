import React from 'react';
import { ToDoAddSearch } from '../ToDoAddSearch/index.js';
import { TodoContext } from '../TodoContext/index.js';
import { TodoItem } from '../TodoItem';
import './App.css';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError/index.js';
import { Modals } from '../Modals/index.js';
import { TodosItemModal } from '../Modals/TodosItemModal/index.js';
import { TodoAddSearchModal } from '../Modals/TodoAddSearchModal/index.js';


function App() {

  const {
    loading,
    error,
    openModalDelete,
    openModalAdd,
    setOpenModalAdd,
    setOpenModalDelete,
    searchedTodos: todos,
    updateTodos,
    deleteTodos
  } = React.useContext(TodoContext);

  console.log(todos);

  return (
    <div className="App">
      <div className="todos-container">
        <h2>ToDo List</h2>
        <ToDoAddSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError error={error} />}
          {!loading && todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              setOpenModalDelete={setOpenModalDelete}
              setTodos={(updateTodo) => updateTodos(updateTodo)}
              deleteTodo={(deleteTodo) => deleteTodos(deleteTodo)}
            />
          ))}
        </TodoList>
        {openModalDelete && <Modals>
          <TodosItemModal setOpenModalDelete={setOpenModalDelete} />
        </Modals>}
        {openModalAdd && <Modals>
          <TodoAddSearchModal setOpenModalAdd={setOpenModalAdd} />
        </Modals>}
      </div>
    </div>
  );
}

export default App;
