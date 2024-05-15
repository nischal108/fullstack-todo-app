import React, { useState, useEffect } from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((response) => response.json())
      .then((data) => {
        const todosArray = data.todos;
        setTodos(todosArray);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  console.log(todos);

  return (
    <div className="min-h-screen bg-gray-500 flex gap-10 items-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Todo App</h1>
        <CreateTodo />
      </div>
      <div className="mt-8">
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
