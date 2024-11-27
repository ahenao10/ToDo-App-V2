import { ToDoAddSearch } from '../ToDoAdd-Search';
import { TodoItem } from '../TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todos-container">
        <h2>ToDo List</h2>  
        <ToDoAddSearch></ToDoAddSearch>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
}

export default App;
