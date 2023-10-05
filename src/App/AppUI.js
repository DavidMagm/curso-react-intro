import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItems';
import { TodoButtom } from './todoButtom';
import { TodoTitle } from './todoTitle';
import { TodoLoading } from './todoLoading';
import { TodoError } from './todoError';
import { EmpyTodo } from './empyTodo';
import React from 'react';

function AppUI() {
    return (
  
        <>
          <TodoTitle/>
          <TodoCounter completed={completedTodo} total={totalTodo} />
          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <TodoLoading/>}
            {error && <TodoError/>}
            {(!loading && searchTodo.length == 0) && <EmpyTodo/>}
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

export { AppUI };