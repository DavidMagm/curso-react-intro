import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItems';
import { TodoButtom } from './todoButtom';
import React from 'react';
import './todoCounter.css';
import './todoSearch.css';
import './todoList.css';
import './todoItems.css';
import './App.css';

const depTodo = [
  {text: 'cortar cebolla', check: true},
  {text: 'soy yo', check: false},
  {text: 'estoy aqui', check: false},
  {text: 'ahora vuelvo', check: false}
];

function App() {
  return (
  
    <>
      <TodoCounter/>
      <TodoSearch />

      <TodoList>
        {depTodo.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}/>
        ))}
      </TodoList>
      <TodoButtom/>
    </>

  );
}



export default App;
