import React from 'react';
import {TodoIcon} from './todoIcon';

function CompleteIcon({completed, onComplete}) {
    return(
        <TodoIcon
        type="Check"
        color={completed ? 'white': 'gray'}
        onClick={onComplete}
        />
    )
}

export { CompleteIcon }