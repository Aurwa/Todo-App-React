import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  //console.log(todos);
  return (
    <div className="todo-container grid">
      <ul className="todo-list max-w-sm">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
