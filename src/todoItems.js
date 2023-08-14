
function TodoItem (props) {
    return (
       <li className={`todoItem ${props.completed && "active"}`}>
      <span className={`icon iconCheck ${props.completed && "iconCheckActive"}`}
      onClick={props.onComplete}
      >v</span>
      <p className={`itemText`}>{props.text}</p>
      <span className="icon iconDelete"
      onClick={props.onDelete}
      >x</span>
      </li>
    );
  }

export { TodoItem };