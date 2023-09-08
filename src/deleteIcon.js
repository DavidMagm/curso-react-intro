import {TodoIcon} from './todoIcon';

function DeleteIcon ({onDelete}) {
    return (
        <TodoIcon
        type="Delete"
        color="red"
        onClick={onDelete}
        />
    )
}

export {DeleteIcon}