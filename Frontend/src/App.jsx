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
  }, [todos]);

  console.log(todos);

  return (
    <div className="max-h-screen bg-gray-500 flex gap-10 items-center p-5 shadow-black ">
      <div className="w-[30%] bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-between">
        <h1 className="text-2xl font-bold mb-6 w-1/2">Todo App</h1>
        <CreateTodo />
      </div>
      <div className='mt-6 w-[70%] '>
        <h1 className='text-white text-4xl font-bold text-center m-4'>Your Todos</h1>
      <div className="overflow-y-auto h-[85vh]">
        <Todos todos={todos} setTodos={setTodos} />
      </div>
      </div>
    </div>
  );
}

export default App;
