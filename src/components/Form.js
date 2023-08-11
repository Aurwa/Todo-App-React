const Form = () => {
  return (
    <div className="text-center flex justify-center space-x-5 my-20">
      <input
        type="text"
        className="todo-input focus:outline-none px-3 py-2 w-2/6 rounded-md text-lg"
      />
      <button
        className="todo-button w-1/12 bg-blue-700 text-white text-xl font-bold rounded-md hover:bg-orange-700 "
        type="submit"
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
