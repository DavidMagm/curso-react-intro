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
          <TodoContext.Consumer>
            {({
              loading,
              error,
              searchTodo,
              completeTodo,
              openModal,
              setOpenModal,
              deleteTodo
            }
            ) => (
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
            )}
          
          </TodoContext.Consumer>
          <TodoButtom
            setOpenModal={setOpenModal}
          />
          {openModal && (
            <Modal>
              una function
            </Modal>

          )}
        </>
      );
}

export { AppUI };