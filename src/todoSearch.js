
function TodoSearch ({searchValue,setSearchValue}) {
    return (
       <input placeholder="Filter" className="todoSearch" value={searchValue}
       onChange ={(event) => {
         setSearchValue(event.target.value);
       }}></input>
    );
  }

  export { TodoSearch };