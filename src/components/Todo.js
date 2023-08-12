import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //deleteHandler
  const deleteHandler = () => {
    //console.log("todo - ", todo);
    setTodos(
      todos.filter((el) => {
        return el.id !== todo.id;
      })
    );
  };

  //completeHandler
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="todo flex text-xl justify-between bg-white m-2 rounded-lg items-center pl-3 w-full">
        <li className="todo-item flex-1">{text}</li>

        <button
          className="complete-btn bg-green-600 py-2 px-3 text-white"
          onClick={completeHandler}
        >
          <i className="fas fa-check"></i>
        </button>

        <button
          className="trash-btn bg-red-600 py-2 px-3 rounded-r-lg text-white"
          onClick={deleteHandler}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
