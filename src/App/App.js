import React from 'react';
import { TodoProvider } from "../todoContext";
import {AppUI} from './AppUI';
//import './App.css';

// const depTodo = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'soy yo', completed: false},
//   {text: 'estoy aqui', completed: false},
//   {text: 'ahora vuelvo', completed: false},
//   {text: 'hola mundo', completed: true}
// ];


function App() {
  
  
return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>

)

  
}



export default App;
