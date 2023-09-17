import React from 'react';
import {TodoIcon} from './index';

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