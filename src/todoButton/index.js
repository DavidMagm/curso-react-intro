import React from 'react';
import './todoButton.css';

function TodoButtom () {
    return (
      <button className="todoButton"
      onClick={ () => {setOpenModal(state => !state)} }
      >+
      </button>
    );
  }

export {TodoButtom};