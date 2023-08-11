import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-blue-500 h-screen py-8 font-mono">
      <header>
        <h1 className="text-4xl font-bold text-center text-white">Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
