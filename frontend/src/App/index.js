import React from 'react';
import { ToDoAddSearch } from '../ToDoAddSearch/index.js';
import { TodoContext } from '../TodoContext/index.js';
import { TodoItem } from '../TodoItem';
import './App.css';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
// import { TodosError } from '../TodosError/index.js';
import { Modals } from '../Modals/index.js';
import { TodoAddSearchModal } from '../Modals/TodoAddSearchModal/index.js';
import { AddEmptyTodoModal } from '../Modals/AddEmptyTodoModal/index.js';
import { OneCharModal } from '../Modals/OneCharModal/index.js';
import { AddTodoDescription } from '../Modals/AddTodoDescription/index.js';
import { EmptyList } from '../EmptyList/index.js';
import { Dashboard } from '../Modals/DashboardModal/index.js';
import { ChartContext } from '../TodoContext/ChartContext.js';

function App() {

  const {
    loading,
    // error,
    openModalAdd,
    setOpenModalAdd,
    openAddEmptyModal,
    setOpenAddEmptyModal,
    openOneCharModal,
    setOpenOneCharModal,
    openAddDescriptionModal,
    setOpenAddDescriptionModal,
    titleValue,
    descriptionValue,
    searchedTodos: todos,
    updateTodos,
    deleteTodos,
    todosList,
  } = React.useContext(TodoContext);

  const {
    openDashboard,
    setOpenDashboard
  } = React.useContext(ChartContext);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setOpenDashboard(true)}>Dashboard</button>
        <button onClick={async function () {
          const response = await fetch('https://todo-app-v2-mlad.onrender.com/click').then(response => response.json());
          response && alert(response);
        }}>Click me!</button>
      </header>
      <div className="todos-container">
        <h2>ToDo List</h2>
        <ToDoAddSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {/* {error && <TodosError error={error} />} */}
          {((!loading && todosList.length === 0) || !todosList) && <EmptyList />} {/*se cambio localstorageitem por todoslist, verificar en un futuro por posible mal funcionamiento de EmptyList*/}
          {!loading && todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              description={todo.description}
              completed={todo.completed}
              setTodos={(updateTodo) => updateTodos(updateTodo)}
              deleteTodo={(deleteTodo) => deleteTodos(deleteTodo)}
            />
          ))}
        </TodoList>
        {openModalAdd && <Modals>
          <TodoAddSearchModal setOpenModalAdd={setOpenModalAdd} />
        </Modals>}
        {openAddEmptyModal && <Modals>
          <AddEmptyTodoModal setOpenAddEmptyModal={setOpenAddEmptyModal} />
        </Modals>}
        {openOneCharModal && <Modals>
          <OneCharModal setOpenOneCharModal={setOpenOneCharModal} />
        </Modals>}
        {openAddDescriptionModal && <Modals>
          <AddTodoDescription setOpenAddDescriptionModal={setOpenAddDescriptionModal} titleTodoValue={titleValue} descriptionTodoValue={descriptionValue} />
        </Modals>}
        {openDashboard && <Modals>
          <Dashboard setOpenDashboard={setOpenDashboard} />
        </Modals>}
      </div>
    </div>
  );
}

export default App;