
function TodoCounter ({completed,total,titleChange}) {
    return (
       <h2 className="todoCounter" onChange={titleChange}>
        Completed <span>{completed}</span> to <span>{total}</span>
       </h2>
    );
  }

  export { TodoCounter };