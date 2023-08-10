function TodoButtom () {
    return (
       <button className="todoButton" onClick={(event) => {
        console.log('click al button');
        console.log(event);
       }}>+</button>
    );
  }

export {TodoButtom};