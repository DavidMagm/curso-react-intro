import React from 'react';
import {TodoContext} from '../todoContext';
import './todoForm.css';

function TodoForm() {
    const {addTodo,setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Crea un nuevo Todo</label>
            <textarea placeholder="Crea un Todo"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="todoForm-buttonContainer">
                <button className="todoForm-button todoForm-button--cancel"
                onClick={onCancel}
                >
                Cancel
                </button>
                <button className="todoForm-button todoForm-button--add" type="submit">
                Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}