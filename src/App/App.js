import React from 'react';
import {AppUI} from './AppUI';
import './App.css';

// const depTodo = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'soy yo', completed: false},
//   {text: 'estoy aqui', completed: false},
//   {text: 'ahora vuelvo', completed: false},
//   {text: 'hola mundo', completed: true}
// ];

function useLocalStorage(itemName,inicialValue) {
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);
  React,useEffect(() => {
    setTimeout(() => {
      try {
        const localItem = localStorage.getItem(itemName);
        let parsedItem;
        if(localItem) {
          localStorage.setItem(itemName,JSON.stringify(inicialValue));
          parsedItem = inicialValue
        } else {
          parsedItem = JSON.parse(localItem);
          setItem(parsedItem);
        }
        setLoading(false)
      } catch(error) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [])

  const [item, setItem] = React.useState(parsedItem);

  function saveItem(newItem) {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return {item,saveItem,loading,error };
}

function App() {
  
  const {item: todos,saveItem: saveTodo,loading,error} = useLocalStorage('TODO_V1', []);
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
  <AppUI 
  loading={loading}
  error={error}
  completedTodos={completedTodo}
  totalTodos={totalTodo}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  searchTodo={searchTodo}
  completeTodo={completeTodo}
  deleteTodo={deleteTodo}
  
  />

)

  
}



export default App;
