import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="bg-gradient-to-r from-orange-600 to-blue-500 h-screen py-8 font-mono">
      <div>
        <header>
          <h1 className="text-4xl font-bold text-center text-white">
            Todo List
          </h1>
        </header>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
