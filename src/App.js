import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItems';
import { TodoButtom } from './todoButtom';
import React from 'react';
import './App.css';

function App() {
  return (
  
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch />

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <TodoButtom/>
    </React.Fragment>

  );
}



export default App;
