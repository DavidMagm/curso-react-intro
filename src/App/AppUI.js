import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { TodoButtom } from '../todoButton';
import { TodoTitle } from '../todoTitle';
import { TodoLoading } from '../todoLoading';
import { TodoError } from '../todoError';
import { EmpyTodo } from '../empyTodo';
import { TodoContext } from '../todoContext';
import { Modal } from '../modal';
import {TodoForm} from '../todoForm';
import React from 'react';

function AppUI() {
  const {
    loading,
    error,
    searchTodo,
    completeTodo,
    openModal,
    setOpenModal,
    deleteTodo
  } = React.useContext(TodoContext)
    return (
  
        <>
          <TodoTitle/>
          <TodoCounter/>
          <TodoSearch/>
              <TodoList>
              {loading && <TodoLoading/>}
              {error && <TodoError/>}
              {(!loading && searchTodo.length === 0) && <EmpyTodo/>}
              {searchTodo.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}/>
              ))}
            </TodoList>
  
          <TodoButtom
            setOpenModal={setOpenModal}
          />
          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>

          )}
        </>
      );
}

export { AppUI };