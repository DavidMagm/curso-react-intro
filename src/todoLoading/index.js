import './todoLoading.css';
function TodoLoading (props) {
    return (
    <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
    </div>
    );
  }

  export { TodoLoading };