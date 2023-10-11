import React from 'react';
import { TodoContext } from '../todoContext';
import './todoCounter.css';

function TodoCounter () {
  const {completedTodo,totalTodo,titleChange} = React.useContext(TodoContext);
    return (
      completedTodo === totalTodo ?
      <h2 className="todoCounter">Has acabado</h2> 
      :
       <h2 className="todoCounter" onChange={titleChange}>
        Completed <span>{completedTodo}</span> to <span>{totalTodo}</span>
       </h2>
    );
  }

  export { TodoCounter };