import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  //console.log(todos);
  return (
    <div className="todo-container ml-96">
      <ul className="todo-list max-w-lg">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
