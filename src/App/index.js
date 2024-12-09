import { ToDoAddSearch } from '../ToDoAdd-Search';
import { TodoItem } from '../TodoItem';
import './App.css';
import { TodoList } from './TodoList/index.js';

function App() {
  return (
    <div className="App">
      <div className="todos-container">
        <h2>ToDo List</h2>
        <ToDoAddSearch></ToDoAddSearch>
        <TodoList>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </TodoList>
      </div>
    </div>
  );
}

export default App;
