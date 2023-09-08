import {TodoIcon} from './todoIcon';

function CompleteIcon({onComplete}) {
    return(
        <TodoIcon
        type="Check"
        color={completed ? 'green': 'gray'}
        onClick={onComplete}
        />
    )
}

export {CompleteIcon}