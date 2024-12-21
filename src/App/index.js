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
import { AddEmptyTodoModal } from '../Modals/AddEmptyTodoModal/index.js';
import { EmptyList } from '../EmptyList/index.js';


function App() {

  const {
    loading,
    error,
    openModalDelete,
    openModalAdd,
    setOpenModalAdd,
    setOpenModalDelete,
    openAddEmptyModal,
    setOpenAddEmptyModal,
    searchedTodos: todos,
    updateTodos,
    deleteTodos,
    todosList,
    localStorageItem
  } = React.useContext(TodoContext);

  return (
    <div className="App">
      <div className="todos-container">
        <h2>ToDo List</h2>
        <ToDoAddSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError error={error} />}
          {((!loading && todosList.length === 0) || !localStorageItem) && <EmptyList />}
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
        {openAddEmptyModal && <Modals>
          <AddEmptyTodoModal setOpenAddEmptyModal={setOpenAddEmptyModal} />
        </Modals>}
      </div>
    </div>
  );
}

export default App;