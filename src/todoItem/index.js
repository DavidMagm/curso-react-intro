import { CompleteIcon } from "../todoIcon/completeIcon";
import { DeleteIcon } from "../todoIcon/deleteIcon";
import './todoItems.css';
function TodoItem (props) {
    return (
       <li className={`todoItem ${props.completed && "active"}`}>
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        />
      <p className={`itemText`}>{props.text}</p>
      <DeleteIcon
      onDelete={props.onDelete}
      />
      </li>
    );
  }

export { TodoItem };