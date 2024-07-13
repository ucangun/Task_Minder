import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="todoList">
      <div className="todoList-input">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleClick}>+</button>
      </div>
      <div className="todoList-container">
        {todos.map(({ id, text, completed }) => (
          <div className="todo" key={id}>
            <p>{text}</p>
            <div className="resultBox">
              <i className="fa-solid fa-check"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
