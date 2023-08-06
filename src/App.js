import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import './App.css';

function App() {
  return (
  

    <div className="App">
      <TodoCounter/>
      <TodoSearch />

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
    </div>
  );
}

 function TodoItem () {
   return (
      <li>
     <span>v</span>
     <p>el texto</p>
     <span>x</span>
     </li>
   );
 }

export default App;
