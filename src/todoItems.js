
function TodoItem (props) {
    return (
       <li className={`todoItem ${props.completed && "active"}`}>
      <span className={`icon iconCheck ${props.completed && "iconCheckActive"}`}>v</span>
      <p className={`itemText`}>{props.text}</p>
      <span className="icon iconDelete">x</span>
      </li>
    );
  }

export { TodoItem };