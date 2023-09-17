
function TodoCounter ({completed,total,titleChange}) {
    return (
      completed === total ?
      <h2 className="todoCounter">Has acabado</h2> 
      :
       <h2 className="todoCounter" onChange={titleChange}>
        Completed <span>{completed}</span> to <span>{total}</span>
       </h2>
    );
  }

  export { TodoCounter };