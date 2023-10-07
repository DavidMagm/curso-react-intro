import React from "react";
function useLocalStorage(itemName,inicialValue) {
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localItem = localStorage.getItem(itemName);
          let parsedItem;
          if(localItem) {
            localStorage.setItem(itemName,JSON.stringify(inicialValue));
            parsedItem = inicialValue
          } else {
            parsedItem = JSON.parse(localItem);
            setItem(parsedItem);
          }
          setLoading(false)
        } catch(error) {
          setLoading(false)
          setError(true)
        }
      }, 2000)
    }, [])
  
    const [item, setItem] = React.useState(parsedItem);
  
    function saveItem(newItem) {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return {item,saveItem,loading,error };
  }

  export { useLocalStorage };