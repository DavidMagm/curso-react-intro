import { CompleteIcon } from "./completeIcon";
import { DeleteIcon } from "./deleteIcon";
function TodoItem (props) {
    return (
       <li className={`todoItem ${props.completed && "active"}`}>
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        />
      {/* <span className={`icon iconCheck ${props.completed && "iconCheckActive"}`}
      onClick={props.onComplete}
      >v</span> */}
      <p className={`itemText`}>{props.text}</p>
      <DeleteIcon
      onDelete={props.onDelete}
      />
      {/* <span className="icon iconDelete"
      onClick={props.onDelete}
      >x</span> */}
      </li>
    );
  }

export { TodoItem };