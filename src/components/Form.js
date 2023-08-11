import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitTodoHandler = (e) => {
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 100,
      },
    ]);

    setInputText("");
  };

  return (
    <div className=" flex justify-center space-x-5 my-20">
      <input
        type="text"
        value={inputText}
        className="todo-input focus:outline-none px-3 py-2 rounded-md text-lg w-2/6"
        onChange={inputTextHandler}
      />
      <button
        className="todo-button w-1/12 bg-blue-700 text-white text-xl font-bold rounded-md hover:bg-orange-700 "
        type="submit"
        onClick={submitTodoHandler}
      >
        Add
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
