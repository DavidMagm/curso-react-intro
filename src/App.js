import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItems';
import { TodoButtom } from './todoButtom';
import { TodoTitle } from './todoTitle';
import React from 'react';
import './App.css';

// const depTodo = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'soy yo', completed: false},
//   {text: 'estoy aqui', completed: false},
//   {text: 'ahora vuelvo', completed: false},
//   {text: 'hola mundo', completed: true}
// ];

function useLocalStorage(itemName,inicialValue) {
  const localItem = localStorage.getItem(itemName);
  let parsedItem;
    localItem ? localStorage.setItem(itemName,JSON.stringify(inicialValue));
    parsedItem = inicialValue : parsedItem.JSON.parse(localItem);

  const [item, setItem] = React.useState(parsedItem);

  function saveItem(newItem) {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item,saveItem];
}

function App() {
  
  const [todos,saveTodo] = useLocalStorage('TODO_V1', []);
  const [searchValue,setSearchValue] = React.useState('');
  
  // filtro de busqueda
  const searchTodo = todos.filter(todo => {
    let todoText = todo.text.toLowerCase();
    let searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
      }
    )

  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodo = todos.length;
  
  

  const completeTodo = (text) => {
    const newTodo = [...todos];
    const todoIndex = newTodo.findIndex(
      (todo) => todo.text === text);
    newTodo[todoIndex].completed = true;
    saveTodo(newTodo)
  }

  const deleteTodo = (text) => {
    const newTodo = [...todos];
    const todoIndex = newTodo.findIndex(
      (todo) => todo.text === text);
    newTodo.splice(todoIndex,1);
    saveTodo(newTodo)
  }



  return (
  
    <>
      <TodoTitle/>
      <TodoCounter completed={completedTodo} total={totalTodo} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchTodo.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>
      <TodoButtom/>
    </>
  );
}



export default App;
