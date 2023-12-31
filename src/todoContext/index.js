import  React  from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}) {
  const {item: todos,saveItem: saveTodo,loading,error} = useLocalStorage('TODO_V1', []);
  const [searchValue,setSearchValue] = React.useState('');
  const [openModal,setOpenModal] = React.useState(false);
  
  // filtro de busqueda
  const searchTodo = todos.filter(todo => {
    let todoText = todo.text.toLowerCase();
    let searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
      }
    )

  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodo = todos.length;
  
  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo.push({text, completed: false})
    saveTodo(newTodo);
  }
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
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodo,
        totalTodo,
        searchValue,
        setSearchValue,
        searchTodo,
        completeTodo,
        addTodo,
        openModal,
        setOpenModal,
        deleteTodo
    }}>
        {children}
    </TodoContext.Provider>
    )
    
}

export { TodoProvider, TodoContext };