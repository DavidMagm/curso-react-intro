
function TodoCounter ({completed,total}) {
    return (
       <h2 className="todoCounter">
        Completed <span>{completed}</span> to <span>{total}</span>
       </h2>
    );
  }

  export { TodoCounter };